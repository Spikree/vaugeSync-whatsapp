import { create } from "zustand";
import axiosInstance from "@/utils/AxiosInstance";
import type { AxiosError } from "axios";
import { toast } from "sonner";

interface AdminStore {
  getUsers: () => Promise<void>;
}

export const AdminStore = create<AdminStore>(() => ({
  getUsers: async () => {
    try {
      const response = await axiosInstance.get("/api/admin/users");
      console.log(response);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "Failed to get users";
      toast.error(errorMessage);
    }
  },
}));
