"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaWhatsapp } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { contactSchema } from "@/lib/validation/Email-type";
import { toast } from "sonner";
import PhoneInput from "react-phone-number-input"; // Importing PhoneInput
import { CountryCode, isValidPhoneNumber } from "libphonenumber-js/min";
import "react-phone-number-input/style.css"; // Importing phone input styles

type FormData = z.infer<typeof contactSchema>;

export default function FloatingButtons() {
  const [showPopup, setShowPopup] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [country, setCountry] = useState<string | undefined>("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code) {
          setCountry(data.country_code);
        }
      })
      .catch((err) => console.error("ipapi.co error:", err));
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error("Submission failed. Please try again.");
        console.error(result.error || result);
      } else {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setShowPopup(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="relative w-full max-w-md border-white/30 bg-white/30 backdrop-blur-md">
            <CardHeader className="text-center">
              <button
                className="absolute top-4 right-4  hover:text-black"
                onClick={() => setShowPopup(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <CardTitle className="text-2xl">Free Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we’ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("firstName")}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      validate: (value) =>
                        isValidPhoneNumber(value || "") ||
                        "Valid phone number is required",
                    }}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                        disabled={isSubmitting}
                        international
                        defaultCountry={country as CountryCode | undefined}
                        placeholder="Enter phone number"
                        className="rounded-md border bg-black px-3 py-2 w-full"
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    {...register("company")}
                    disabled={isSubmitting}
                  />
                  {errors.company && (
                    <p className="text-sm text-red-500">
                      {errors.company.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">
                    Message{" "}
                    <span className="text-xs text-gray-500">(Optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    disabled={isSubmitting}
                    rows={3}
                    {...register("message")}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/+917845931744"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 border border-white/20"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>

        <a
          href="tel:+917845931744"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 border border-white/20"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
