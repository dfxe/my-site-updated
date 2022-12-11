const Footer = () => {
  return (
    <footer
      className={
        "flex flex-col justify-center items-center text-center my-10 min-h-[50px]"
      }
    >
      <div className="flex row">
        <div className="text-black">© {new Date().getFullYear()} &nbsp;</div>
        <a
          href="https://www.github.com/dfxe"
          target="_blank"
          rel="noreferrer noopener"
          className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink to-red"
        >
          dfxe
        </a>
      </div>
      <a
        href="https://github.com/dfxe/my-site-updated"
        target="_blank"
        rel="noreferrer noopener"
        className="text-base font-extrabold text-transparent duration-300 ease-in bg-clip-text bg-gradient-to-br from-pink to-red hover:underline"
      >
        Site source code.
      </a>
    </footer>
  );
};

export default Footer;
