import React from "react";

type Props = {
  children: React.ReactNode;
  dimensions: { width: number; height: number };
  rowSpan?: string;
  isSecondary?: boolean;
  borderStyle?: string;
};
const Card = ({
  children,
  dimensions,
  rowSpan,
  isSecondary = true,
  borderStyle = "",
}: Props) => {
  return (
    <div
      className={` ${borderStyle} p-1 xl:p-8 flex flex-col justify-center items-center
       hover:drop-shadow-lg hover:scale-[1.05] transition duration-150 ease-in-out ${rowSpan}`}
    >
      {children}
    </div>
  );
};

export default Card;
