// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ArrowRight } from "lucide-react";
import { navbarMenus } from "../../utils/navbarMenus";

const menuContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const menuItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  // Track which menu is currently open (by id), or null if none
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  return (
    <nav className="w-full bg-transparent inset-0 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-block bg-[#dbdbdb] text-black text-[2rem] font-bold px-8 py-1 rounded">
          LOGO
        </Link>

        {/* Center menus */}
        <div className="flex space-x-5">
          {navbarMenus.map((menu) => {
            const isOpen = openMenuId === menu.id;
            return (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setOpenMenuId(menu.id)}
                onMouseLeave={() => setOpenMenuId(null)}
              >
                <DropdownMenu open={isOpen} onOpenChange={(o) => setOpenMenuId(o ? menu.id : null)}>
                  <DropdownMenuTrigger asChild>
                    <button className="inline-flex items-center text-[#222222] font-medium hover:text-[#0546D2] transition">
                      {menu.MenuName}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={4}
                    className="min-w-[12rem] p-2"
                  >
                    <motion.div
                      variants={menuContainer}
                      initial="hidden"
                      animate={isOpen ? "show" : "hidden"}
                    >
                      {menu.MenuItems.map((item, idx) => (
                        <motion.div key={idx} variants={menuItem}>
                          <DropdownMenuItem asChild className="p-2 group">
                            <Link
                              href={menu.ItemLinks[idx]}
                              className="flex justify-between items-center"
                            >
                              <span>{item}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                            </Link>
                          </DropdownMenuItem>
                        </motion.div>
                      ))}
                    </motion.div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            );
          })}
        </div>

        {/* Sign In button */}
        <Link
          href="/signin"
          className="px-8 py-2 bg-White hover:bg-[#0546D2] shadow-md text-black hover:text-white font-medium rounded transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
