"use client";

import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function FloatingButtons() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/67fdc405337fb2190cfd4c5c/1iorkbdsf";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* <a
        href="https://wa.me/+917845931744"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageSquare className="w-5 h-5" />
      </a> */}

      <a
        href="tel:+917845931744"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
