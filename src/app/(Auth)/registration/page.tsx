"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import Button2 from "@/components/seraui/button"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import image1 from "@/assets/auth/image1.jpg"
import logo from "@/assets/auth/logo.png"

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type RegisterFormValues = z.infer<typeof registerSchema>

const RegisterPage: React.FC = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: RegisterFormValues) {
    console.log("✅ Form Submitted:", values)
  }

  return (
    <div className="flex min-h-screen  gap-14 bg-[#F8FBED]">
      {/* Left image */}
      <img
        src={image1.src}
        alt="Worker building deck"
        className="object-cover max-h-screen w-1/2"
      />

      {/* Right registration form */}
      <div className="w-1/2 flex items-center  ">
        <div className="w-full  p-8">
          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-6">
            <img src={logo.src} alt="Horizon Composite" className="h-12 mb-2" />
            <h2 className="text-xl font-normal text-[#53640F]">
              Register Now!
            </h2>
          </div>

          {/* Hook Form */}
          <div className="w-full">
                     <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl leading-5 font-medium text-[#60701E] mt-2.5">Full Name</FormLabel>
                    <FormControl>
                      <Input className="h-16 w-full bg-[#E0EDAD]" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel  className="text-xl leading-5 font-medium text-[#60701E] mt-2.5">Email</FormLabel>
                    <FormControl>
                      <Input
                      defaultValue={"Tomar amar restaurant"}
                      className="h-16 w-full bg-[#E0EDAD]"
                        type="email"
                        placeholder="example@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel  className="text-xl leading-5 font-medium text-[#60701E] mt-2.5">Password</FormLabel>
                    <FormControl>
                      <Input className="h-16 w-full bg-[#E0EDAD]" type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel  className="text-xl leading-5 font-medium text-[#60701E] mt-2.5">Confirm Password</FormLabel>

                    <FormControl>
                      <Input className="h-16 w-full bg-[#E0EDAD]" type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Register Button */}
              <Button2 className="bg-[#94B316] text-2xl leading-8 w-full rounded-4xl text-white h-16"  >Register</Button2>
{/*               
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
              >
                Register
              </Button> */}
            </form>
          </Form>
          </div>

          {/* Divider */}
          <div className="my-4 flex items-center justify-between">
            <hr className="w-1/3 border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          {/* Google Button */}
          <button className="w-full border flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-200 text-gray-700">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Login link */}
          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
