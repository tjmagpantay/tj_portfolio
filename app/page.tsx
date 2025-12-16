"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const router = useRouter();

  const introTexts = [
    { text: "Hey, I'm Tj" },
    { text: "IT Professional in progress" },
    { text: "I turn ideas into digital realities" },
  ];

  useEffect(() => {
    if (currentStep < introTexts.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 400);

      // Redirect to about page
      const redirectTimer = setTimeout(() => {
        router.push("/about");
      }, 1200);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(redirectTimer);
      };
    }
  }, [currentStep, introTexts.length, router]);

  const getAnimationClass = (index: number) => {
    if (currentStep === index) {
      // Current text - sliding up to center
      return "translate-y-0";
    } else if (currentStep > index) {
      // Previous text - already slid up and out of view
      return "-translate-y-full";
    } else {
      // Next text - waiting below, ready to slide up
      return "translate-y-full";
    }
  };

  if (!showMain) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-background z-[9999] transition-opacity duration-700 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center relative w-full h-32 px-8 overflow-hidden">
          {introTexts.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out ${getAnimationClass(
                index
              )}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent animate-gradient-slow">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
