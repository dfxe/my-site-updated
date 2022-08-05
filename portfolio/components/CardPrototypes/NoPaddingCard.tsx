import React from "react";

type Props = {
  children: React.ReactNode;
  borderStyle?: string;
};
const Card = ({ children, borderStyle = "" }: Props) => {
  return (
    <div
      className={`${borderStyle}
      flex-auto
      border-2
      flex flex-col justify-center items-center
      hover:drop-shadow-lg transition duration-150 ease-in-out `}
    >
      {children}
    </div>
  );
};

export default Card;
