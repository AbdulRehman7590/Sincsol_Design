"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Instagram,
  Linkedin,
  PhoneIcon as WhatsApp,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import MainNavbar from "@/components/main-navbar";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [phoneCode, setPhoneCode] = useState("PK");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <MainNavbar />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-[#8B5CF6] p-12 pt-44 text-white">
          <div className="pl-[10%]">
            <h1 className="text-5xl font-bold mb-12">
              Let&apos;s Talk With Us
            </h1>
            <p className="mb-12 text-xl">
              Get in touch with us for any inquiries or assistance. We&apos;re
              here to help you with your business needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <p>Business Incubation center UET Lahore</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <p>+923348076805</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <a
                  href="mailto:info@sincsol.com"
                  className="underline hover:text-blue-700"
                >
                  info@sincsol.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <Link
                href="#"
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <WhatsApp className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 pt-40">
          <div className="pr-[17%]">
            <div className="mb-8">
              <h4 className="text-xl text-[#8B5CF6] font-bold mb-3">
                Contact us
              </h4>
              <h2 className="text-5xl font-bold">
                Get <span className="text-[#8B5CF6]">in touch</span>
              </h2>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm">First name</label>
                  <Input placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Last name</label>
                  <Input placeholder="Last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm">Email</label>
                <Input type="email" placeholder="you@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm">Phone number</label>
                <div className="flex gap-2">
                  <select
                    className="w-20 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                  >
                    <option value="PK">PK</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                  </select>
                  <Input placeholder="+92 0000-000000" className="flex-1" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm">Message</label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="privacy" />
                <label htmlFor="privacy" className="text-sm">
                  You agree to our{" "}
                  <Link href="#" className="text-purple-500 hover:underline">
                    privacy policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full text-white bg-[#8B5CF6] hover:bg-[#7C3AED]"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
