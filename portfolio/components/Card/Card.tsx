import React from "react";

type Props = {
  children: React.ReactNode;
  dimensions: { width: number; height: number };
};
const Card = ({ children, dimensions }: Props) => {
  return (
    <div
      className={`w-${dimensions.width} h-${dimensions.height} bg-card-secondary rounded-lg p-4`}
    >
      {children}
    </div>
  );
};

export default Card;
