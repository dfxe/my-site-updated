import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-base">
      <div className="flex row">
        Copyright © 2022 &nbsp;
        <a
          href="https://www.github.com/ukruel"
          className="text-base font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
        >
          @ukruel
        </a>
      </div>
      <a
        href="https://www.github.com"
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
