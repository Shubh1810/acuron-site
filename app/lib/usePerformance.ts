'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for optimizing performance in expensive calculations or animations
 * @param callback The expensive function to be memoized and executed
 * @param dependencies Array of dependencies to control when the calculation should run
 * @param debounceTime Optional debounce time in milliseconds (default: 200ms)
 * @returns An object with the result, isCalculating state, and a forceCalculate function
 */
export function usePerformanceOptimizer<T>(
  callback: () => T, 
  dependencies: any[] = [], 
  debounceTime: number = 200
) {
  const [result, setResult] = useState<T | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const prevDepsRef = useRef<any[]>(dependencies);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Clean up function to clear timeout
  const clearDebounceTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  
  // Force calculation function
  const forceCalculate = useCallback(() => {
    setIsCalculating(true);
    clearDebounceTimeout();
    
    // Use requestAnimationFrame for smoother rendering
    requestAnimationFrame(() => {
      try {
        const newResult = callback();
        setResult(newResult);
      } catch (error) {
        console.error('Error in performance calculation:', error);
      } finally {
        setIsCalculating(false);
      }
    });
  }, [callback, clearDebounceTimeout]);
  
  // Run calculation when dependencies change
  useEffect(() => {
    const depsChanged = dependencies.some(
      (dep, i) => !Object.is(dep, prevDepsRef.current[i])
    );
    
    if (depsChanged) {
      setIsCalculating(true);
      clearDebounceTimeout();
      
      // Debounce the calculation
      timeoutRef.current = setTimeout(() => {
        requestAnimationFrame(() => {
          try {
            const newResult = callback();
            setResult(newResult);
          } catch (error) {
            console.error('Error in performance calculation:', error);
          } finally {
            setIsCalculating(false);
          }
        });
      }, debounceTime);
      
      prevDepsRef.current = dependencies;
    }
    
    return () => {
      clearDebounceTimeout();
    };
  }, [...dependencies, callback, clearDebounceTimeout, debounceTime]);
  
  return { result, isCalculating, forceCalculate };
}

/**
 * Custom hook to prevent memory leaks by cleaning up resources
 * @param cleanup Function to run on component unmount
 */
export function useCleanup(cleanup: () => void) {
  useEffect(() => {
    return cleanup;
  }, [cleanup]);
}

/**
 * Custom hook to monitor and optimize render counts
 * @returns Current render count
 */
export function useRenderCount() {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current += 1;
    
    if (renderCount.current > 5 && process.env.NODE_ENV === 'development') {
      console.warn(`Component has rendered ${renderCount.current} times. Consider optimizing.`);
    }
  });
  
  return renderCount.current;
}

/**
 * Custom hook to cache fetch results and prevent unnecessary refetching
 * @param key The cache key, should be unique for each resource
 * @param fetcher The fetch function to call
 * @param ttl Time to live in milliseconds before cache expires (default: 5 minutes)
 * @returns The fetch result and loading state
 */
export function useCachedFetch<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 5 * 60 * 1000
) {
  interface CacheItem<T> {
    data: T;
    timestamp: number;
  }
  
  const cache = useRef<Map<string, CacheItem<T>>>(new Map());
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      // Check if we have cached data that's still valid
      const cached = cache.current.get(key);
      const now = Date.now();
      
      if (cached && now - cached.timestamp < ttl) {
        setData(cached.data);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await fetcher();
        setData(result);
        
        // Update cache
        cache.current.set(key, {
          data: result,
          timestamp: now
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
    
    // Clean up function - remove stale cache entries
    return () => {
      const now = Date.now();
      cache.current.forEach((item, cacheKey) => {
        if (now - item.timestamp > ttl) {
          cache.current.delete(cacheKey);
        }
      });
    };
  }, [key, fetcher, ttl]);
  
  return { data, isLoading, error };
} 