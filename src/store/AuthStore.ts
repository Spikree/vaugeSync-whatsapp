import { create } from "zustand";
import axiosInstance from "@/utils/AxiosInstance";
import type { AxiosError } from "axios";
import { toast } from "sonner";

interface authUser {
  success: boolean;
  user: {
    id: string,
    username: string,
    roles: string[],
    clientId: string,
    client: string
  };
}

interface AuthStore {
  authUser: authUser | null;

  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;

  isCheckingAuth: boolean;
}

export const AuthStore = create<AuthStore>((set) => ({
  authUser: null,
  isCheckingAuth: false,

  login: async (username: string, password: string) => {
    const formData = {
      username,
      password,
    };
    try {
      const response = await axiosInstance.post("/api/login", formData);
      toast.success("Logged in");
      set({ authUser: response.data.user });
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post("/api/logout");
      console.log(response);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "Logout failed. Please try again.";
      toast.error(errorMessage);
    }
  },

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/api/refresh");
      console.log(response);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "No auth provided";
      toast.error(errorMessage);
    }
  },
}));
