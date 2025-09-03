import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9faef] p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="flex flex-col items-center p-10">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-20 h-20 text-lime-600"
              fill="currentColor"
            >
              <path d="M48 32v20H8V20h32v-4H8c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V32h-4z" />
              <path d="M54 6H36c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 12H38V10h14v8z" />
              <path d="M32 28h-8v4h8v-4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center text-lime-700 mb-2">
            Forgot Your Password
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Enter your mail that we provide you a reset PIN
          </p>
          <Input
            type="email"
            placeholder="example@gmail.com"
            className="mb-4 w-full"
          />
          <Button className="bg-lime-600 hover:bg-lime-700 text-white w-full">
            Send Mail
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

