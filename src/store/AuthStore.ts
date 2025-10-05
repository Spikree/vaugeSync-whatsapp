import { create } from "zustand";
import axiosInstance from "@/utils/AxiosInstance";
import type { AxiosError } from "axios";
import { toast } from "sonner";

interface authUser {
  success: string;
  data: {
    profile: {
      id: number;
      username: string;
      roles: string[];
    };
  };
  timestamp: number;
}

interface AuthStore {
  authUser: authUser | null;

  login: (username: string, password: string) => Promise<void>;
}

export const AuthStore = create<AuthStore>((set) => ({
  authUser: null,

  login: async (username: string, password: string) => {
    const formData = {
      username,
      password,
    };
    try {
      const response = await axiosInstance.post("/api/login", formData);
      toast.success("Logged in")
      set({ authUser: response.data.user });
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "Login failed. Please try again.";
        toast.error(errorMessage);
    }
  },
}));
