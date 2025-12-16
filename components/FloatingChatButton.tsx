"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingChatButton() {
  const handleEmailClick = () => {
    window.location.href = "mailto:tjmagpantay23@gmail.com";
  };

  return (
    <Button
      onClick={handleEmailClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground z-50 transition-all hover:scale-110"
      aria-label="Send email"
    >
      <Mail className="h-6 w-6" />
    </Button>
  );
}
