// src/components/Form.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { motion, Variants, AnimatePresence } from "framer-motion";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  size: z.enum(["A", "B", "C"], {
    errorMap: () => ({ message: "Please select a size" }),
  }),
  email: z.string().email("Invalid email address"),
  timeframe: z.enum(["A", "B", "C"], {
    errorMap: () => ({ message: "Please select a time frame" }),
  }),
  quantity: z.string().min(1, "Please select a quantity"),
  description: z.string().min(1, "Please describe your project"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

// Fade-in + stagger container
const formVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// Fade-in for each field
const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Form() {
  const [showToast, setShowToast] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({ resolver: zodResolver(quoteSchema) });

  // Removed the unused parameter
  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setShowToast(true);
    reset();
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const inputClasses =
    "bg-gray-100 text-gray-900 border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0546D2]";

  return (
    <section className="py-16 px-1 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[2.5rem] font-bold text-[#222222] text-center mb-12 [font-family:var(--font-heading)]">
          REQUEST A QUOTE
        </h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8"
          variants={formVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Name */}
          <motion.div variants={fieldVariants} className="flex flex-col">
            <label className="mb-5 font-medium text-gray-700">Name</label>
            <input {...register("name")} className={cn(inputClasses, errors.name && "border-red-500")} />
            {errors.name && <span className="text-red-600 text-sm mt-1">{errors.name.message}</span>}
          </motion.div>

          {/* Email */}
          <motion.div variants={fieldVariants} className="flex flex-col">
            <label className="mb-5 font-medium text-gray-700">Email</label>
            <input {...register("email")} className={cn(inputClasses, errors.email && "border-red-500")} />
            {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email.message}</span>}
          </motion.div>

          {/* Phone */}
          <motion.div variants={fieldVariants} className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Phone No.</label>
            <input {...register("phone")} className={cn(inputClasses, errors.phone && "border-red-500")} />
            {errors.phone && <span className="text-red-600 text-sm mt-1">{errors.phone.message}</span>}
          </motion.div>

          {/* Time Frame */}
          <motion.div variants={fieldVariants} className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Time Frame</label>
            <select {...register("timeframe")} className={cn(inputClasses, errors.timeframe && "border-red-500")}>
              <option value="">Select…</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            {errors.timeframe && <span className="text-red-600 text-sm mt-1">{errors.timeframe.message}</span>}
          </motion.div>

          {/* Size */}
          <motion.div variants={fieldVariants} className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Size</label>
            <select {...register("size")} className={cn(inputClasses, errors.size && "border-red-500")}>
              <option value="">Select…</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            {errors.size && <span className="text-red-600 text-sm mt-1">{errors.size.message}</span>}
          </motion.div>

          {/* Quantity */}
          <motion.div variants={fieldVariants} className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Quantity</label>
            <select {...register("quantity")} className={cn(inputClasses, errors.quantity && "border-red-500")}>
              <option value="">Select…</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={String(i + 1)}>
                  {i + 1}
                </option>
              ))}
            </select>
            {errors.quantity && <span className="text-red-600 text-sm mt-1">{errors.quantity.message}</span>}
          </motion.div>

          {/* Description */}
          <motion.div variants={fieldVariants} className="md:col-span-2 flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Please describe your Project</label>
            <textarea
              {...register("description")}
              className={cn(
                "bg-gray-100 text-gray-900 border border-black rounded px-4 py-2 resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#0546D2]",
                errors.description && "border-red-500"
              )}
            />
            {errors.description && <span className="text-red-600 text-sm mt-1">{errors.description.message}</span>}
          </motion.div>

          {/* Terms & Privacy */}
          <motion.div variants={fieldVariants} className="md:col-span-2 text-sm text-gray-600 text-center">
            By submitting this form you agree to our{" "}
            <Tooltip>
              <TooltipTrigger className="underline cursor-pointer text-gray-800">
                Terms of Service
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white" style={{
                "--radix-tooltip-content-background": "black",
                "--radix-tooltip-arrow-fill": "black"
              } as React.CSSProperties}>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 20 20">
                    <path d="M12.707 5.293a1 1 0 00-1.414 1.414L13.586 9H7a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z"/>
                  </svg>
                  <a href="/terms" className="text-white" rel="noopener noreferrer">
                    Open tealpackaging.com/terms-and-conditions
                  </a>
                </div>
              </TooltipContent>
            </Tooltip>{" "}
            and{" "}
            <Tooltip>
              <TooltipTrigger className="underline cursor-pointer text-gray-800">
                Privacy Policy
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white" style={{
                "--radix-tooltip-content-background": "black",
                "--radix-tooltip-arrow-fill": "black"
              } as React.CSSProperties}>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 20 20">
                    <path d="M12.707 5.293a1 1 0 00-1.414 1.414L13.586 9H7a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z"/>
                  </svg>
                  <a href="/privacy" className="text-white" rel="noopener noreferrer">
                    Open tealpackaging.com/privacy-policy
                  </a>
                </div>
              </TooltipContent>
            </Tooltip>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fieldVariants} className="md:col-span-2 flex justify-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center bg-[#1959AC] hover:bg-[#0546D2] text-white font-[600] px-6 py-3 rounded-md transition disabled:opacity-50"
              animate={isClicked ? { scale: [1, 0.9, 1] } : {}}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setIsClicked(true);
                setTimeout(() => setIsClicked(false), 300);
              }}
            >
              Lorum Ipsum
              <span className="ml-2 transition-transform group-hover:translate-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      {/* Toast Popup with slide-in/out animation */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded flex items-center shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            Request submitted!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
