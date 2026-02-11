import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Time before data is considered stale (5 minutes)
      staleTime: 1000 * 60 * 5,

      // Time before inactive queries are garbage collected (10 minutes)
      gcTime: 1000 * 60 * 10,

      // Retry failed requests
      retry: 1,

      // Refetch on window focus
      refetchOnWindowFocus: false,

      // Refetch on reconnect
      refetchOnReconnect: true,
    },
    mutations: {
      // Retry failed mutations
      retry: 0,
    },
  },
});
