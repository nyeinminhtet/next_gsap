"use client";

import React from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

import { featureLists, goodLists } from "@/constants";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });
  return (
    <div id="art">
      <div className="mx-auto container h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((list, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src="/images/check.png"
                  alt="check"
                  width={15}
                  height={15}
                />
                <p>{list}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <Image
              src="/images/under-img.jpg"
              alt="under-img"
              width={300}
              height={300}
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((list, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <Image
                  src="/images/check.png"
                  alt="check"
                  width={15}
                  height={15}
                />
                <p className="md:w-fit w-60">{list}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This is&apos;t just a drink. It&apos;s a story. It&apos;s a way of
              life. It&apos;s a way of being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
