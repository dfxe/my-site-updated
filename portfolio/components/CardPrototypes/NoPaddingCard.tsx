type Props = {
  children: React.ReactNode;
  additionalStyles?: string;
};
const Card = ({ children, additionalStyles = "" }: Props) => {
  return (
    <div
      className={`
      ${additionalStyles}
      border-r-0 border-l-0 border-t-2 border-b-2
      xl:border-r-2 xl:border-l-2 xl:border-b-2 xl:border-t-2
      `}
    >
      {children}
    </div>
  );
};

export default Card;
