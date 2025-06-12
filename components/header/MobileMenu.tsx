"use client"

import React from "react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { menuItems } from "./Header";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <div className="mt-8 px-2 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.id}>
                {item.label}
              </Link>
            ))}
            </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
