"use client";
import { FaGoogle } from "react-icons/fa6";

import { FormWithServerAction } from "@/components/form_with_server_action";
import { Button } from "@/components/ui/button";

import { login } from "./actions";

export const LoginForm: React.FC = () => {
  return (
    <FormWithServerAction
      action={login}
      render={({ status, state }) => {
        return (
          <fieldset className="w-[480px] bg-slate-100 rounded-lg p-6">
            <Button className="w-full">
              <FaGoogle />
              Log In with Google
            </Button>
          </fieldset>
        );
      }}
    />
  );
};
