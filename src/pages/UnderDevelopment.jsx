import React from "react";
import '../Custom.css'
import { Construction } from "lucide-react";

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center px-4">
      
      {/* Icon */}
      <div className="mb-6 animate-bounce">
        <Construction size={84} className="text-[#6D00ff]" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-grad mb-3">
        Website Under Development
      </h1>

      {/* Message */}
      <p className="text-gray-400 max-w-md mb-6">
        The TechFest 6.0 website is currently under development.
        We’re working hard to bring you something exciting. Please check back soon!
      </p>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 mt-8">
        © TechFest 6.0 — All rights reserved
      </p>
    </div>
  );
};

export default UnderDevelopment;