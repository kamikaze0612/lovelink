import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./login_form";

export const LoginCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-4xl">Welcome, lovebird!</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <p className="w-full text-center text-zinc-500">
          &copy; Lovelink 2024 All rights reserved
        </p>
      </CardFooter>
    </Card>
  );
};
