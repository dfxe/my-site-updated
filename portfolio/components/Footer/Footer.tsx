const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-base my-4">
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
    </div>
  );
};

export default Footer;
