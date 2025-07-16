"use client";

import React from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { cocktailLists, mockTailLists } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: -100,
      });
  });

  return (
    <section id="cocktails" className="noisy">
      <Image
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
        width={100}
        height={100}
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
        width={500}
        height={500}
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map((cocktail, index) => (
              <li key={cocktail.name + index}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map((cocktail, index) => (
              <li key={cocktail.name + index}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
