'use client';

import { useEffect } from 'react';
import { cleanupGlobalCache } from './cacheUtils';

export default function CacheCleanupClient() {
  useEffect(() => {
    // This will run when the component unmounts, cleaning up any cache
    return () => {
      cleanupGlobalCache();
    };
  }, []);
  
  return null;
} 