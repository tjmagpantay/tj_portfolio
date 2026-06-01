"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const incrementVisitor = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 seconds timeout

      try {
        const response = await fetch(
          "https://countapi.mileshilliard.com/api/v1/hit/tjmagpantay-portfolio-visits",
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (typeof data.value === "number") {
          setCount(data.value);
        }
      } catch (error) {
        console.warn("Visitor counter API offline, using fallback visitor count.", error);
        setCount(null);
      }
    };

    incrementVisitor();
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border/40 shadow-xs">
      <p className="text-[10px] font-medium text-muted-foreground/80">
        Visitors: {count.toLocaleString()}
      </p>
    </div>
  );
}
