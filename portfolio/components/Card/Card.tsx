import React from "react";

type Props = {
  children: React.ReactNode;
  dimensions: { width: number; height: number };
  rowSpan?: string;
  isSecondary?: boolean;
};
const Card = ({ children, dimensions, rowSpan, isSecondary = true }: Props) => {
  return (
    <div
      className={`w-${dimensions.width} h-${dimensions.height} ${
        isSecondary ? "bg-card-secondary" : "bg-card-primary"
      } rounded-apple-radius p-8 ${rowSpan}`}
    >
      {children}
    </div>
  );
};

export default Card;
