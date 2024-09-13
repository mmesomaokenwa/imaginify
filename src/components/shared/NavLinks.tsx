"use client";

import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  links: typeof navLinks;
  isSignedIn?: boolean;
  showIcon?: boolean;
  classNames?: {
    container?: string;
    link?: string;
    linkContainer?: string;
    icon?: string;
  };
};

const NavLinks = ({ links, isSignedIn, showIcon, classNames }: Props) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <ul className={classNames?.container}>
      {links.map((link) => {
        return (
          <li
            key={link.route}
            data-active={isActive(link.route)}
            className={classNames?.linkContainer}
          >
            <Link className={classNames?.link} href={link.route}>
              {showIcon && (
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                  className={classNames?.icon}
                />
              )}
              {link.label}
            </Link>
          </li>
        );
      })}
      {isSignedIn && (
        <li className="flex-center cursor-pointer gap-2 p-4">
          <UserButton afterSignOutUrl="/" showName />
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
