"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast"; //optional
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaPhone, FaGithub, FaGitlab } from "react-icons/fa";
export default function Contact() {
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email("Invalid email address.").min(2, {
      message: "Email must be at least 2 characters.",
    }),
    message: z.string().min(10, {
      message: "Message should be at least 10 characters.",
    }),
  });

  // EmailJS needs the `ref` parameter in a form, ShadCN doesn't use
  // this by default so we have to import it.
  const formRef = useRef<HTMLFormElement | null>(null);

  // configure Zod default values for the form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (formRef.current) {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are not set correctly.");
        return;
      }

      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        () => {
          console.info("SUCCESS");
          toast({
            title: "Email sent.",
            description: `Thanks ${data.username}, I'll be in touch.`,
          });
          form.reset(); //clear the fields after submission
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Email failed to send.",
            description: `Please contact support if this continues.`,
          });
          console.warn("FAILED...", JSON.stringify(error));
        }
      );
    }
  };

  return (
    <section id="contact" className="p-3  w-full mb-4">
      <h2 className="text-5xl w-full flex justify-center items-center pb-3">
        {" "}
        <span className="font-mono text-white">Contact</span>{" "}
      </h2>

      <div className="w-full flex justify-center items-center">
        <Form {...form}>
          <form
            ref={formRef} //Required by EmailJS
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6 text-black"
          >
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary "
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary bg-white"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-primary bg-white"
                      placeholder="Type your message here."
                      id="message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <Button
              type="submit"
              className="text-md text-white bg-[#4f7090] hover:bg-[#243545]"
            >
              Send
            </Button>
            <div className="flex space-x-1 md:space-x-4">
              {/* Icons for WhatsApp, LinkedIn, and Phone */}
              <Link href="https://wa.me/+22961670094" target="_blank">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-700" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/libert-sinzogan-9b5ba7212/"
                target="_blank"
              >
                <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
              </Link>
              <Link href="https://github.com/Paololibert" target="_blank">
                <FaGithub className="text-2xl text-gray-500 hover:text-gray-700" />
              </Link>
              <Link href="https://gitlab.com/libertsinzo7" target="_blank">
                <FaGitlab className="text-2xl text-[#4f7090] hover:text-gray-700" />
              </Link>
              <div className="flex justify-center space-x-1 ">
                <FaPhone className="text-2xl text-[#4f7090] hover:text-gray-700" />

                <span className="text-white flex"> <span className="hidden md:block">+229</span> 61670094</span>
              </div>
            </div>
          </div>

          </form>
        </Form>
      </div>
    </section>
  );
}
