"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventImageDialogProps {
  eventTitle: string;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function EventImageDialog({
  eventTitle,
  images,
  isOpen,
  onClose,
}: EventImageDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Calculate visible images
  const getVisibleImages = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    return [prevIndex, currentIndex, nextIndex];
  };

  const [prevIdx, centerIdx, nextIdx] = getVisibleImages();

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl p-6 bg-card border border-border">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-foreground">
            {eventTitle}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modern 3-Image Carousel with Overlapping Depth */}
        <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
          {/* Carousel Container */}
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Left Image (Background Layer) */}
            <div className="absolute left-[10%] sm:left-[15%] w-64 h-64 sm:w-80 sm:h-80 transition-all duration-500 opacity-60 scale-90 z-10">
              <Image
                src={images[prevIdx]}
                alt={`Image ${prevIdx + 1}`}
                width={1080}
                height={1080}
                className="object-cover w-full h-full rounded-xl shadow-lg"
              />
            </div>

            {/* Center Image (Foreground - Full Focus) */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 transition-all duration-500 scale-100 opacity-100 hover:scale-105 z-30 shadow-2xl">
              <Image
                src={images[centerIdx]}
                alt={`Image ${centerIdx + 1}`}
                width={1080}
                height={1080}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* Right Image (Background Layer) */}
            <div className="absolute right-[10%] sm:right-[15%] w-64 h-64 sm:w-80 sm:h-80 transition-all duration-500 opacity-60 scale-90 z-10">
              <Image
                src={images[nextIdx]}
                alt={`Image ${nextIdx + 1}`}
                width={1080}
                height={1080}
                className="object-cover w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card/80 hover:bg-card border border-border text-foreground p-0 z-40 shadow-lg backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card/80 hover:bg-card border border-border text-foreground p-0 z-40 shadow-lg backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm border border-border text-foreground px-4 py-2 rounded-full text-sm shadow-lg z-40">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </Card>
    </div>
  );
}
