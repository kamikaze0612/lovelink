"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const login: React.ServerAction = async () => {
  try {
    await signIn("google");
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        success: false,
        error: "Cannot log in",
      };
    }

    throw error;
  }
};
