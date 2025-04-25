'use client';

// Enhanced LRU Cache with size limits and auto-cleanup
export class LRUCache<K, V> {
  private cache: Map<K, V>;
  private timestamps: Map<K, number>;
  private maxSize: number;
  private maxAge: number; // milliseconds
  private cleanupInterval: number; // milliseconds
  private intervalId: NodeJS.Timeout | null = null;
  private memoryWarningThreshold: number = 0.9; // 90% of max memory
  
  constructor(maxSize: number = 100, maxAge: number = 5 * 60 * 1000, cleanupInterval: number = 60 * 1000) {
    this.cache = new Map();
    this.timestamps = new Map();
    this.maxSize = maxSize;
    this.maxAge = maxAge;
    this.cleanupInterval = cleanupInterval;
    
    // Start automatic cleanup
    this.startCleanupInterval();
  }
  
  // Get an item from the cache
  get(key: K): V | undefined {
    const item = this.cache.get(key);
    
    if (item) {
      // Check if item has expired
      const timestamp = this.timestamps.get(key);
      if (timestamp && Date.now() - timestamp > this.maxAge) {
        this.delete(key);
        return undefined;
      }
      
      // Update timestamp on access (LRU behavior)
      this.timestamps.set(key, Date.now());
      
      // Move the item to the end of the cache (most recently used)
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    
    return item;
  }
  
  // Set an item in the cache
  set(key: K, value: V): void {
    // If the cache is at capacity, remove the oldest entry
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey !== undefined) {
        this.delete(oldestKey);
      }
    }
    
    // Add the new entry
    this.cache.set(key, value);
    this.timestamps.set(key, Date.now());
    
    // Check if we should warn about memory usage
    this.checkMemoryUsage();
  }
  
  // Delete an item from the cache
  delete(key: K): boolean {
    const result = this.cache.delete(key);
    this.timestamps.delete(key);
    return result;
  }
  
  // Check if key exists in cache (without updating timestamp)
  has(key: K): boolean {
    return this.cache.has(key);
  }
  
  // Clear all items from the cache
  clear(): void {
    this.cache.clear();
    this.timestamps.clear();
  }
  
  // Get all keys in the cache
  keys(): IterableIterator<K> {
    return this.cache.keys();
  }
  
  // Get number of items in the cache
  get size(): number {
    return this.cache.size;
  }
  
  // Start the cleanup interval
  private startCleanupInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    this.intervalId = setInterval(() => {
      this.cleanup();
    }, this.cleanupInterval);
  }
  
  // Clean up expired items
  private cleanup(): void {
    const now = Date.now();
    
    for (const [key, timestamp] of this.timestamps.entries()) {
      if (now - timestamp > this.maxAge) {
        this.delete(key);
      }
    }
  }
  
  // Check memory usage and clear cache if it's too high
  private checkMemoryUsage(): void {
    // Using a safer check for performance.memory which is a non-standard Chrome-only API
    if (typeof window !== 'undefined' && 
        typeof performance !== 'undefined' && 
        // @ts-ignore - Chrome-specific memory API
        typeof performance.memory !== 'undefined') {
      try {
        // @ts-ignore - Chrome-specific memory API
        const memoryUsage = performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit;
        
        if (memoryUsage > this.memoryWarningThreshold) {
          console.warn(`Memory usage is high (${Math.round(memoryUsage * 100)}%). Clearing cache.`);
          this.clear();
        }
      } catch (error) {
        // Silently fail if memory measurements aren't available
      }
    }
  }
  
  // Destroy the cache and clean up resources
  destroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.clear();
  }
}

// Global cache instance
let globalCache: LRUCache<string, any> | null = null;

// Get the global cache instance
export function getGlobalCache(): LRUCache<string, any> {
  if (!globalCache) {
    globalCache = new LRUCache();
  }
  return globalCache;
}

// Clean up the global cache (call this in layout.tsx or a top-level component)
export function cleanupGlobalCache(): void {
  if (globalCache) {
    globalCache.destroy();
    globalCache = null;
  }
}

// Utility functions for working with the cache
export const cacheUtils = {
  // Set a value in the cache with a namespace
  set: (namespace: string, key: string, value: any): void => {
    const cache = getGlobalCache();
    cache.set(`${namespace}:${key}`, value);
  },
  
  // Get a value from the cache with a namespace
  get: <T>(namespace: string, key: string): T | undefined => {
    const cache = getGlobalCache();
    return cache.get(`${namespace}:${key}`) as T | undefined;
  },
  
  // Delete a value from the cache with a namespace
  delete: (namespace: string, key: string): boolean => {
    const cache = getGlobalCache();
    return cache.delete(`${namespace}:${key}`);
  },
  
  // Clear all values for a namespace
  clearNamespace: (namespace: string): void => {
    const cache = getGlobalCache();
    for (const key of cache.keys()) {
      if (key.startsWith(`${namespace}:`)) {
        cache.delete(key);
      }
    }
  },
  
  // Clear the entire cache
  clearAll: (): void => {
    const cache = getGlobalCache();
    cache.clear();
  }
}; 