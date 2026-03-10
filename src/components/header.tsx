"use client";

import { useState } from "react";

export default function Header() {
  const [istime, setIstime] = useState(true);
  return (
    <>
      <div className="flex">
        <div className="text-white p-4 text-left font-semibold">
          {istime
            ? new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            : "Gold App"}
        </div>
      </div>
    </>
  );
}
