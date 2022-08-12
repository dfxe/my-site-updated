type Props = {
  isAbsolutePosition?: boolean;
};
const Footer = ({ isAbsolutePosition = true }: Props) => {
  return (
    <footer
      className={
        isAbsolutePosition
          ? "absolute bottom-0 right-0 left-0 flex flex-col justify-center items-center text-center my-20"
          : "flex flex-col justify-center items-center text-center my-10"
      }
    >
      <div className="flex row">
        <div className="text-black">© {new Date().getFullYear()} &nbsp;</div>
        <a
          href="https://www.github.com/dfxe"
          target="_blank"
          rel="noreferrer noopener"
          className="text-base font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
        >
          @dfxe
        </a>
      </div>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noreferrer noopener"
        className="text-base font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
      >
        Site source code.
      </a>
    </footer>
  );
};

export default Footer;
