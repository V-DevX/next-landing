// src/components/FAQ.tsx
"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faq } from "../../utils/faq";

export default function FAQ() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-[2.5rem] font-[700] text-[#222222] [font-family:var(--font-heading)] mb-8">
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </h2>

        <Accordion type="single" collapsible className="space-y-6">
          {faq.map((item) => (
            <AccordionItem key={item.id} value={String(item.id)}>
              <AccordionTrigger className="text-left text-[16px] font-[600] text-black">
                {item.Q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[15px] text-[#222222] leading-relaxed">
                  {item.A}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
