import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center text-base mx-4 my-4">
      <div className="flex row  text-6xl">@dfxe</div>
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

export default Navbar;
