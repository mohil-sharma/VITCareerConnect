import React from "react";

export function Button({ className, children, variant = "default", error, ...props }) {
  const baseStyles = "w-full py-2 px-4 rounded-lg font-semibold transition-all";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "bg-transparent border border-gray-700 text-white hover:bg-gray-800",
  };

  return (
    <div className="w-full">
      <button 
        className={`${baseStyles} ${variants[variant]} ${
          error ? "border-2 border-red-500" : ""
        } ${className}`} 
        {...props}
      >
        {children}
      </button>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}