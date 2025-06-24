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
import { ChevronDown, ArrowRight, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
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
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <Link
          href="/"
          className="inline-block bg-[#dbdbdb] text-black text-[2rem] font-bold px-8 py-1 rounded"
        >
          LOGO
        </Link>

        {/* Desktop menus (centered) */}
        <div className="flex-1 hidden md:flex justify-center space-x-5">
          {navbarMenus.map((menu) => {
            const isOpen = openMenuId === menu.id;
            return (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setOpenMenuId(menu.id)}
                onMouseLeave={() => setOpenMenuId(null)}
              >
                <DropdownMenu
                  open={isOpen}
                  onOpenChange={(o) => setOpenMenuId(o ? menu.id : null)}
                >
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

        {/* Sign In (desktop) */}
        <div className="hidden md:block">
          <Link
            href="/signin"
            className="px-8 py-2 bg-white text-black font-medium rounded shadow-md hover:bg-[#0546D2] hover:text-white transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-[#222222] p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="px-6 py-4 space-y-4">
            {navbarMenus.map((menu) => {
              const isSub = mobileSubOpen === menu.id;
              return (
                <div key={menu.id} className="border-b pb-2">
                  <button
                    className="w-full flex justify-between items-center font-medium text-[#222222] py-2"
                    onClick={() => setMobileSubOpen(isSub ? null : menu.id)}
                  >
                    {menu.MenuName}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isSub ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {isSub && (
                    <motion.div
                      className="pl-4 space-y-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                    >
                      {menu.MenuItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={menu.ItemLinks[idx]}
                          className="block text-[#222222] hover:text-[#0546D2] flex justify-between py-1"
                        >
                          <span>{item}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
            <Link
              href="/signin"
              className="block mt-4 px-4 py-2 bg-[#0546D2] text-white text-center rounded-md shadow-md hover:bg-primary transition"
            >
              Sign In
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
);
}