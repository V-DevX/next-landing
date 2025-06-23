// src/components/Sections/Section10Responsive.tsx
"use client";

import React, { useState, useEffect } from "react";
import Section10 from "./Section10";
import Section10alt from "./Section10alt";

export default function Section10Responsive() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 799px)");
    const onChange = (e: MediaQueryListEvent) => setIsSmall(e.matches);
    // set initial
    setIsSmall(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isSmall ? <Section10alt /> : <Section10 />;
}
