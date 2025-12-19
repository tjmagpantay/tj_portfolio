"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Using CountAPI for simple visitor counting
    const incrementVisitor = async () => {
      try {
        const response = await fetch(
          "https://api.countapi.xyz/hit/tjmagpantay-portfolio/visits"
        );
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    incrementVisitor();
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
      <p className="text-[10px] text-muted-foreground/60">
        Visitors: {count.toLocaleString()}
      </p>
    </div>
  );
}
