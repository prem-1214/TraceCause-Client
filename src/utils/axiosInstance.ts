import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "sonner";

interface ApiSuccessResponse<T = unknown> {
  data?: T;
  message?: string;
}

interface ApiErrorResponse {
  message?: string;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor - handle success and error messages
api.interceptors.response.use(
  (response: AxiosResponse<ApiSuccessResponse>) => {
    if (response.data?.message) {
      toast.success(response.data.message);
    }
    return response;
  },
  (error: AxiosError<ApiErrorResponse>) => {
    const message = error.response?.data?.message ?? error.message ?? "Something went wrong!";
    toast.error(message);
    return Promise.reject(error);
  }
);

export default api;
