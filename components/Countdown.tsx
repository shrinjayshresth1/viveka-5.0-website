"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to Feb 19, 2026 (Viveka 5.0)
    const targetDate = new Date("2026-02-19T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 text-center justify-center my-8">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <span className="text-2xl md:text-4xl font-bold text-gray-600 mt-2">:</span>
      <TimeUnit value={timeLeft.hours} label="HRS" />
      <span className="text-2xl md:text-4xl font-bold text-gray-600 mt-2">:</span>
      <TimeUnit value={timeLeft.minutes} label="MIN" />
      <span className="text-2xl md:text-4xl font-bold text-gray-600 mt-2">:</span>
      <TimeUnit value={timeLeft.seconds} label="SEC" />
    </div>
  );
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative group">
      <div className="absolute inset-0 bg-neon-cyan/20 blur-xl group-hover:blur-2xl transition-all duration-300 rounded-lg" />
      <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 px-4 py-3 md:px-6 md:py-4 rounded-lg min-w-[70px] md:min-w-[100px]">
        <span className="text-2xl md:text-5xl font-mono font-bold text-white tabular-nums group-hover:text-neon-cyan transition-colors">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
    <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 mt-2">
      {label}
    </span>
  </div>
);
