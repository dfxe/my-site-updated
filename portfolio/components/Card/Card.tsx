import React from "react";

type Props = {
  children: React.ReactNode;
  dimensions: { width: number; height: number };
  rowSpan?: string;
};
const Card = ({ children, dimensions, rowSpan }: Props) => {
  return (
    <div
      className={`w-${dimensions.width} h-${dimensions.height} bg-card-secondary rounded-apple-radius p-4 ${rowSpan}`}
    >
      {children}
    </div>
  );
};

export default Card;
