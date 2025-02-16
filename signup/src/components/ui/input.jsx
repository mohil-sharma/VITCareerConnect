import React from "react";

export function Input({ className, type = "text", error, ...props }) {
  return (
    <div className="w-full">
      <input
        type={type}
        className={`w-full px-3 py-2 rounded-lg border ${
          error ? "border-red-500" : "border-gray-700"
        } focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-purple-500"
        } bg-gray-800 text-white ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}