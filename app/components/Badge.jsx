import React from "react";

export default function Badge({
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 ease-in-out cursor-pointer select-none";

  const variants = {
    primary:
      "bg-primary text-cneutral-400 text-xl py-3 px-5 hover:bg-gprimary-200 hover:text-white-100 hover:scale-105 transition-all duration-300 ease-in-out focus:border focus:border-cneutral-200",
    secondary:
      "bg-cneutral-400 border border-cneutral-300 text-white-100 text-xl py-3 px-5  hover:bg-cneutral-300 hover:scale-105 transition-all duration-300 ease-in-out focus:border focus:border-cneutral-400",
    smallPrimary: "bg-primary text-cneutral-400 text-[16px] p-1 font-bold",
    smallSecondary:
      "border border-cneutral-300 text-white-100 text-sm py-1 px-2",
  };

  const chosenVariant = variants[variant] || variants.default;
  return (
    <button
      className={`${baseStyles} ${chosenVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
