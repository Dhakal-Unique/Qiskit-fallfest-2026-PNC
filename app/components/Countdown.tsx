"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number } | null>(null);

  useEffect(() => {
    const targetDate = new Date("2026-11-20T20:00:00+05:45");

    const update = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ days, hours, minutes });
    };

    update();
    const interval = setInterval(update, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) return null;

  return (
    <div className="mt-6 flex justify-center gap-4">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Min" },
      ].map(({ value, label }) => (
        <div key={label} className="rounded-lg px-4 py-2 text-center min-w-[64px]" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <p className="text-white text-2xl font-bold leading-none">{String(value).padStart(2, "0")}</p>
          <p className="text-indigo-200 text-xs mt-1">{label}</p>
        </div>
      ))}
      <div className="flex items-end pb-2">
        <p className="text-indigo-200 text-xs">until registration closes</p>
      </div>
    </div>
  );
}
