import { create } from "zustand";
import axiosInstance from "@/utils/AxiosInstance";
import type { AxiosError } from "axios";
import { toast } from "sonner";

interface authUser {
  authenticated: boolean;
  user: {
    id: number;
    username: string;
    roles: string[];
    enabled: boolean;
    accountLocked: boolean;
    accountExpired: boolean;
    passwordExpired: boolean;
  };
}

interface AuthStore {
  authUser: authUser | null;

  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authToken: string;
  refreshToken: string;
  checkAuth: () => Promise<void>;

  isCheckingAuth: boolean;
}

export const AuthStore = create<AuthStore>((set) => ({
  authUser: null,
  isCheckingAuth: false,

  authToken: "",
  refreshToken: "",

  login: async (username: string, password: string) => {
    const formData = {
      username,
      password,
    };
    try {
      const response = await axiosInstance.post("/api/login", formData);
      toast.success("Logged in");
      set({ authUser: response.data.user });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      set({ authToken: response.data.token });
      set({refreshToken: response.data.refreshToken});
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  },

  logout: async () => {
    const rToken = localStorage.getItem("refreshToken");
    try {
      const response = await axiosInstance.post("/api/logout", {
        refreshToken : rToken
      });
      console.log(response);
      if (response) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken")
      }
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
      const response = await axiosInstance.get("/api/me");
      console.log(response);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "Login please";
      toast.error(errorMessage);
    }
  },
}));
