"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "@/constants";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        duration: 1,
        backgroundFilter: "blur(10px)",
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Cocktail Logo"
            width={25}
            height={25}
          />
          <p>Velvet Pour</p>
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
