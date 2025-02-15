// import LoginForm from "@/app/_components/auth/LoginForm";
import LoginForm from "@/app/_components/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
      </div>
    </main>
  );
}
