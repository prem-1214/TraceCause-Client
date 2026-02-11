export const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
export const APP_NAME = "TraceCause";
export const QUERY_KEYS = {
  users: {
    all: ["users"] as const,
    detail: (id: string) => ["users", id] as const,
    list: (filters?: Record<string, unknown>) => ["users", "list", filters] as const,
  },
} as const;
