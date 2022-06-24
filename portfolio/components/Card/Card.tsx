import React from "react";

type Props = {
  children: React.ReactNode;
  borderStyle?: string;
};
const Card = ({ children, borderStyle = "" }: Props) => {
  return (
    <div
      className={`${borderStyle} p-1 xl:p-10 flex flex-col justify-center items-center
       hover:drop-shadow-lg hover:scale-[1.05] transition duration-150 ease-in-out `}
    >
      {children}
    </div>
  );
};

export default Card;
