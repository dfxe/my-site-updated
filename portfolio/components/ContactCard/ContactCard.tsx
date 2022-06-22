import React from "react";
import Image from "next/image";
import Card from "../Card/Card";
//@ts-ignore
import Obfuscate from "react-obfuscate";
import GithubIcon from "../../public/github.png";

const ContactCard = () => {
  return (
    <Card
      dimensions={{ width: 86, height: 96 }}
      borderStyle={"lg:border-l-2 lg:border-r-2"}
    >
      <h1
        className="text-title whitespace-nowrap font-extrabold  text-center
            mb-4"
      >
        Reach out
      </h1>
      <br></br>
      <ul className="flex flex-col items-center">
        <li
          className="mb-2 text-xl text-transparent bg-clip-text bg-gradient-to-br
           from-pink to-red"
        >
          <Obfuscate email="dfldev@proton.me" />{" "}
        </li>

        <li>
          <a
            href="https://github.com/uKruel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github icon" width={32} height={32} />
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default ContactCard;
