"use client";

import { createUser } from "@/app/actions/user";
import { User, UserRole } from "@prisma/client";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignupForm({ role = "USER" }: { role: UserRole }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(data: User) {
    setIsLoading(true);

    data.role = role;
    try {
      const user = await createUser(data);
      const userId = user?.data?.id;
      console.log(user);
      if (user) {
        console.log("User Created successfully");
        reset();
        setIsLoading(false);
        toast.success("Account Created successfully");
        router.push(`/verifyPage/${userId}`);
        // console.log(user);
      } else {
        // console.log(user.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center  px-6 lg:bg-transparent rounded-md  dark:lg:bg-transparent dark:bg-stone-900 bg-stone-200  lg:px-60">
        <div className=" dark:lg:bg-stone-900 lg:bg-stone-200 rounded-md py-12 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="text-2xl font-bold">Signup Form</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-8 w-full justify-between">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 "
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("firstName", { required: true })}
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="firstName"
                      placeholder="John "
                      className="block px-3 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 ml-1 mt-1 text-sm">
                        First Name is required
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 "
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("lastName", { required: true })}
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="lastName"
                      placeholder="Dev"
                      className="block px-3 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 ml-1 mt-1 text-sm">
                        last Name is required
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-8 w-full justify-between">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 "
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("phone", { required: true })}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="phone"
                      placeholder="+256 704980983"
                      className="block px-3 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                    {errors.phone && (
                      <p className="text-red-600 ml-1 mt-1 text-sm">
                        Phone is required
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="name"
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
                      className="block px-3 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                    {errors.email && (
                      <p className="text-red-600 ml-1 mt-1 text-sm">
                        Email is required
                      </p>
                    )}
                  </div>
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
                </div>
                <div className="mt-2">
                  <input
                    {...register("password", { required: true })}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="..........."
                    className="block w-full px-3  rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
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
                    Signing up{" "}
                    <span>
                      <Loader className="animate-spin" />
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Sign up
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
