"use client";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import ProfileMenu from "./ProfileMenu";
import { Search } from "../search";
import ThemeSwitch from "../theme-switch";
export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-2 border-b">
        <MobileSidebar />
        <div className="ml-2 md:ml-16 lg:ml-64">

        <Search />
        </div>
        <div className="flex items-center ml-auto space-x-4">
          <ThemeSwitch />
          {/* <UserNav /> */}
          <ProfileMenu />
        </div>
      </nav>
    </>
  );
}
