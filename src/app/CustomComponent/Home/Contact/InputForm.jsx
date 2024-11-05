"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const InputForm = () => {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const emailParams = {
      ...data,
      name: `${data.firstName} ${data.lastName}`,
      message: `${data.message}`,
      email: `${data.email}`,
      phone: `${data.phone}`,
    };

    emailjs
      .send(
        "service_2d5r8tc", // Replace with your EmailJS service ID
        "template_wfsfmfe", // Replace with your EmailJS template ID
        emailParams,
        "17t-dE5VI-FC-Fspc" // Replace with your EmailJS public key
      )
      .then(() => {
        toast({
          title: "Success",
          description: "Email sent successfully!",
        });
        reset(); // Clear form after successful submission
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        toast({
          title: "Error",
          description: "Failed to send email. Please try again.",
          variant: "destructive",
        });
      });
  };


  return (
    <section className="relative">
      <div className="space-y-24 sm:space-y-12 lg:space-y-16 absolute top-1/3 w-full z-10 sm:mt-8">
        <div className="border bg-[#C4C4C4] h-[2px]" />
        <div className="border bg-[#C4C4C4] h-[2px]" />
        <div className="border bg-[#C4C4C4] h-[2px]" />
      </div>
      <div className="max-w-screen-xl mx-auto px-[5%]">
        <div className="relative z-20 px-5 sm:px-10 py-10 bg-lightGray border border-gray-300 my-12 sm:my-14 lg:my-16 2xl:my-20">
          <form
            className="text-start flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Form Fields */}
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email and Phone Fields */}
            <div className="flex flex-col sm:flex-row gap-5 my-5">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Phone number must contain only digits",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="grid w-full items-center gap-1.5 col-span-2 sm:col-span-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 500,
                    message: "Message cannot exceed 500 characters",
                  },
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Terms Checkbox and Submit Button */}
            <div className="flex flex-col sm:flex-row items-start justify-end sm:items-center gap-5 mt-5">
              <button
                type="submit"
                className="sm:text-lg px-8 py-2 border border-primary rounded-full hover:scale-105 transition-transform duration-500 ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InputForm;
