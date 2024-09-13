import { navLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <NavLinks
              links={navLinks.slice(0, 6)}
              classNames={{
                container: "sidebar-nav_elements",
                linkContainer:
                  "sidebar-nav_element group text-gray-700 data-[active=true]:bg-purple-gradient data-[active=true]:text-white",
                link: "sidebar-link",
              }}
            />

            <NavLinks
              links={navLinks.slice(6)}
              isSignedIn
              classNames={{
                container: "sidebar-nav_elements",
                linkContainer:
                  "sidebar-nav_element group text-gray-700 data-[active=true]:bg-purple-gradient data-[active=true]:text-white",
                link: "sidebar-link",
              }}
            />
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
