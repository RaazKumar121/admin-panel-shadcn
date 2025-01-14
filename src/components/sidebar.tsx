"use client";
import { useEffect, useState } from "react";
import { Button } from "./custom/button";
import { cn } from "@/lib/utils";
import { sidelinks } from "@/data/sidelinks";
import { Layout } from "./custom/layout";
import Nav from "./nav";
import { ChevronsLeft } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean;
}

export default function Sidebar({ className }: SidebarProps) {
  const [navOpened, setNavOpened] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  /* Make body not scrollable when navBar is opened */
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navOpened]);

  return (
    <div
      className={cn(
        `hidden lg:block  h-full  ${isCollapsed ? "md:w-16" : "md:w-72"}`
      )}
    >
      <aside
        className={cn(
          `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${
            isCollapsed ? "md:w-14" : "md:w-60"
          }`,
          className
        )}
      >
        {/* Overlay in mobile */}
        <div
          onClick={() => setNavOpened(false)}
          className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${
            navOpened ? "h-svh opacity-50" : "h-0 opacity-0"
          } w-full bg-black md:hidden`}
        />

        <Layout fixed className={navOpened ? "h-svh" : ""}>
          {/* Header */}
          <Layout.Header
            sticky
            className="z-50 flex justify-between px-4 py-3 shadow-sm md:px-4"
          >
            <div className={`flex items-center ${!isCollapsed ? "gap-2" : ""}`}>
              <div
                className={`flex flex-col justify-end truncate ${
                  isCollapsed ? "invisible w-0" : "visible w-auto"
                }`}
              >
                <span className="font-medium">Shadcn Admin</span>
                <span className="text-xs">Vite + ShadcnUI</span>
              </div>
            </div>
          </Layout.Header>

          <Nav
            id="sidebar-menu"
            className={`z-40 h-full flex-1 overflow-auto px-1 ${
              navOpened
                ? "max-h-screen"
                : "max-h-0 py-0 md:max-h-screen md:py-2"
            }`}
            closeNav={() => setNavOpened(false)}
            isCollapsed={isCollapsed}
            links={sidelinks}
          />

          {/* Scrollbar width toggle button */}
          <Button
            size="icon"
            variant="outline"
            className="absolute z-50 hidden rounded-full -right-5 top-1/2 md:inline-flex"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronsLeft
              className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
            />
          </Button>
        </Layout>
      </aside>
    </div>
  );
}
