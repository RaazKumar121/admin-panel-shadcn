"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Layout } from "../custom/layout";
import Nav from "../nav";
import { sidelinks } from "@/data/sidelinks";
import { Button } from "../custom/button";
import { ChevronsLeft, Menu } from "lucide-react";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-2 w-72 pr-10">
        <Layout fixed>
          {/* Header */}
          <Layout.Header
            sticky
            className="z-50 flex justify-between px-4 py-3 shadow-sm md:px-4"
          >
            <div className={`flex items-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className={`transition-all ${true ? "h-6 w-6" : "h-8 w-8"}`}
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <span className="sr-only">Website Name</span>
              </svg>
              <div
                className={`flex flex-col justify-end truncate ${
                  false ? "invisible w-0" : "visible w-auto"
                }`}
              >
                <span className="font-medium">Shadcn Admin</span>
                <span className="text-xs">Vite + ShadcnUI</span>
              </div>
            </div>
          </Layout.Header>

          <Nav
            id="sidebar-menu"
            className={`z-40 h-full flex-1 overflow-auto ${
              true ? "max-h-screen" : "max-h-0 py-0 md:max-h-screen md:py-2"
            }`}
            closeNav={() => {}}
            isCollapsed={false}
            links={sidelinks}
          />

          {/* Scrollbar width toggle button */}
          <Button
            size="icon"
            variant="outline"
            className="absolute z-50 hidden rounded-full -right-5 top-1/2 md:inline-flex"
          >
            <ChevronsLeft className={`h-5 w-5 ${true ? "rotate-180" : ""}`} />
          </Button>
        </Layout>
      </SheetContent>
    </Sheet>
  );
}
