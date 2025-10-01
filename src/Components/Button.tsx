import type React from "react";

type Props = {
  link?: string;
  children: React.ReactNode
  color: "black"|"white"
};

function Button({ link,children,color }: Props) {
  let variant;
  let colorScheme

  switch (color) {
    case "black":
      colorScheme = "bg-black text-white hover:bg-stone-800";
      break;
    case "white":
      colorScheme = "bg-white text-black hover:bg-stone-200";
      break;
    default:
      colorScheme = "bg-black text-white hover:bg-stone-800";
  }

  const styleVariant = `rounded-lg border p-3 px-6 text-sm cursor-pointer border-stone-300/50 ${colorScheme}`;
  if (link) {
    variant = (
      <a
        href={link}
        target="_blank"
        className = {styleVariant}
      >
        {children}
      </a>
    );
  } else {
    variant = (
      <button className={styleVariant}>
        {children}
      </button>
    );
  }

  return variant;
}

export default Button;
