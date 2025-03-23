"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import React from 'react'
import { toast } from "sonner";
import FormField from "./FormField";




const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional() ,
    email: z.string().email(),
    password: z.string().min(3),
  })
}
const AuthForm = ({type}:{ type:FormType}) => {
  const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      if(type === 'sign-up'){
        console.log('SIGN UP',values)
      }
      else{
        console.log('SIGN IN',values)
      }
    }
    catch(error){
      console.log(error);
      toast.error('There was an error: ${error}')
    }
  }
  const isSignIn = type === 'sign-in';
  return (
    <div className="card-border lg:min-w-[566px]"> 
    <div className="flex flex-col gap 6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
            <Image src="/logo.svg" alt="logo" height={32} width={38} />
            <h2 className="text-primary-100">TalentSight</h2>
        </div>
        <h3>Practice Job Interviews with AI</h3>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
       {!isSignIn && (
         <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
       )}
       <FormField
                control={form.control}
                name="Email"
                label="Email"
                placeholder="Your Email address"
                type="Email"
              />

       <FormField
                control={form.control}
                name="name"
                label="Password"
                placeholder="Your Password"
                type="Password"
              />
       <button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Sign Up' }</button>
      </form>
    </Form>

<p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
    </div>
    </div>
  )
}

export default AuthForm