"use client";
import { loginData } from "@/types/types";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [ShowNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginData>();
  async function onSubmit(data: loginData) {
    // console.log(data);
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        reset();
        setIsLoading(false);
        toast.success("Login Successful");
        router.push("/");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }
  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center rounded-md  px-6 py-8 lg:px-60 lg:bg-transparent dark:lg:bg-transparent dark:bg-stone-900 bg-stone-200">
        <div className=" dark:bg-stone-900 bg-stone-200 rounded-md py-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="text-2xl font-bold">Login Form</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              {ShowNotification && (
                <Alert
                  color="failure"
                  className="bg-red-500 text-white"
                  icon={HiInformationCircle}
                >
                  <span className="font-medium">Wrong Token!</span> Please Check
                  the token and Enter again
                </Alert>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { required: true })}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="youremail@gmail.com"
                    className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-600 ml-1 mt-1 text-sm">
                      Email is required
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 "
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      href="/forgotPassword"
                      className="font-semibold text-amber-600 hover:text-amber-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    {...register("password", { required: true })}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder=".........."
                    className="block w-full px-3 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <p className="text-red-600 ml-1 mt-1 text-sm">
                      Password is required
                    </p>
                  )}
                </div>
              </div>

              <div>
                {isLoading ? (
                  <button
                    type="submit"
                    className="flex gap-4 w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Logging in{" "}
                    <span>
                      <Loader className="animate-spin" />
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Log in
                  </button>
                )}
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                href="/signup"
                className="font-semibold leading-6 text-amber-600 hover:text-amber-500"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
