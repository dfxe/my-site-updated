type Props = {
  children: React.ReactNode;
  borderStyle?: string;
};
const Card = ({ children, borderStyle = "" }: Props) => {
  return (
    <div
      className={`${borderStyle}
      border-r-0 border-l-0 border-t-2 border-b-2
      xl:border-r-2 xl:border-l-2 xl:border-b-2 xl:border-t-2
      hover:drop-shadow-lg transition duration-150 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default Card;
