import React from "react";

export function Card({ className, children, error }) {
  return (
    <div
      className={`rounded-lg shadow-lg p-4 ${
        error ? "border-2 border-red-500" : ""
      } ${className}`}
    >
      {children}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export function CardContent({ className, children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}