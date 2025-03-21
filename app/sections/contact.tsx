"use client";
import Image from "next/image";
import React from "react";
import LiquidShape from "../components/liquid-shape";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  KeyRoundIcon,
  LetterText,
  Mail,
  UserRound,
} from "lucide-react";
import InputField from "../components/input";
import InputTextArea from "../components/input-area";
import NetworkCV from "../components/network-cv";
import { delay, motion } from "framer-motion";

export const loginSchema = z.object({
  fullName: z.string().min(3, "Name is Required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  subject: z.string().min(3, "Subject is Required"),
  description: z.string().min(3, "Description is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

const ContactSection = () => {
  const shapeColor = "#FFD6E8";

  const titleVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const imageVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const formVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
        delay: 1,
      },
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
    } catch (error: any) {}
  };

  return (
    <section
      id="contact"
      className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center mx-auto max-w-7xl px-4 pt-28 gap-10"
    >
      <LiquidShape
        color={shapeColor}
        position="-top-[100px] -right-[300px] z-0"
        height="600px"
        width="600px"
      />

      <div className="flex flex-col md:w-2/3 gap-8 z-10 text-center md:text-start min-w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVarient}
          viewport={{ once: true }}
          className="z-10"
        >
          <span className="text-bgPink font-bold [font-size:_clamp(2rem,4vw,3.5rem)]">
            Contact Me
          </span>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVarient}
          viewport={{ once: true }}
          className="md:hidden block relative md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto"
        >
          <Image
            className="absolute md:w-[500px] md:h-[500px] w-[300px] h-[300px] right-0"
            src="/contact.svg"
            alt="about"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={formVarient}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 overflow-hidden items-center justify-center flex"
        >
          <div className="flex-1 rounded-lg px-6 pb-4">
            <div className="w-full">
              <div className="flex flex-col md:flex-row w-full justify-between md:gap-6">
                <InputField
                  id="fullName"
                  label="Full Name"
                  register={register}
                  errors={
                    errors.fullName && <span>{errors.fullName.message}</span>
                  }
                  icon={<UserRound size={20} />}
                />
                <InputField
                  id="email"
                  label="Email"
                  register={register}
                  errors={errors.email && <span>{errors.email.message}</span>}
                  icon={<Mail size={20} />}
                />
              </div>
              <InputField
                id="subject"
                label="Subject"
                register={register}
                errors={errors.subject && <span>{errors.subject.message}</span>}
                icon={<LetterText size={20} />}
              />
              <InputTextArea
                id="description"
                label="Description"
                register={register}
                errors={
                  errors.description && (
                    <span>{errors.description.message}</span>
                  )
                }
              />
            </div>
            <button
              className="mt-8 bg-bgPink rounded-xl py-2 w-[200px] text-white font-bold mx-auto shadow-md"
              type="submit"
            >
              Send
            </button>
          </div>
        </motion.form>
      </div>
      <div className="flex flex-col gap-1 z-10">
        <div className="hidden md:block relative md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto">
          <Image
            className="absolute md:w-[500px] md:h-[500px] w-[300px] h-[300px] right-0"
            src="/contact.svg"
            alt="about"
            width={100}
            height={100}
          />
        </div>
        <NetworkCV />
      </div>
    </section>
  );
};

export default ContactSection;
