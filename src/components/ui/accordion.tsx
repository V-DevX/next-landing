// src/components/ui/accordion.tsx
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-gray-200 last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          [
            "focus-visible:border-ring focus-visible:ring-ring/50",
            "flex flex-1 items-start justify-between gap-4",
            "rounded-md py-4 text-left text-sm font-medium transition-all outline-none",
            "focus-visible:ring-[3px]",
            "disabled:pointer-events-none disabled:opacity-50",
            "[&[data-state=open]>.plusIcon]:hidden",
            "[&[data-state=open]>.minusIcon]:block",
          ].join(" "),
          className
        )}
        {...props}
      >
        {children}
        <PlusIcon className="plusIcon size-4" />
        <MinusIcon className="minusIcon size-4 hidden" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
        "overflow-hidden text-md",
        className
      )}
      {...props}
    >
      <div className="pt-0 pb-4 mr-10 md:mr-30">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
