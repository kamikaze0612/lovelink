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
          <fieldset className="w-[480px] rounded-lg p-6">
            <Button className="flex w-full items-center gap-2.5">
              <FaGoogle />
              Log in with Google account
            </Button>
          </fieldset>
        );
      }}
    />
  );
};
