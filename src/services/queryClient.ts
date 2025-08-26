import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Time in milliseconds after which data is considered stale
      staleTime: 1000 * 60 * 5, // 5 minutes
      
      // Time in milliseconds after which inactive queries are garbage collected
      gcTime: 1000 * 60 * 30, // 30 minutes (was cacheTime in v4)
      
      // Retry failed requests
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors except 408 (timeout)
        if (error?.response?.status >= 400 && error?.response?.status < 500 && error?.response?.status !== 408) {
          return false;
        }
        // Retry up to 3 times for other errors
        return failureCount < 3;
      },
      
      // Retry delay
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      
      // Refetch on window focus
      refetchOnWindowFocus: false,
      
      // Refetch on reconnect
      refetchOnReconnect: true,
      
      // Refetch on mount
      refetchOnMount: true,
    },
    mutations: {
      // Retry failed mutations
      retry: 1,
      
      // Retry delay for mutations
      retryDelay: 1000,
    },
  },
});

// Optional: Add global error handler
queryClient.setMutationDefaults(['mutation'], {
  onError: (error) => {
    console.error('Mutation error:', error);
    // You can add global error handling here
    // For example, show a toast notification
  },
});

// Optional: Add global success handler
queryClient.setMutationDefaults(['mutation'], {
  onSuccess: (data) => {
    console.log('Mutation success:', data);
    // You can add global success handling here
  },
});
