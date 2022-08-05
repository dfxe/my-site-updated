import React from "react";
import Image from "next/image";
import Card from "../CardPrototypes/Card";
//@ts-ignore
import Obfuscate from "react-obfuscate";
import GithubIcon from "../../public/github.png";

const ContactCard = () => {
  return (
    <Card borderStyle={"bg-card-secondary"}>
      <h1 className="text-title whitespace-normal lg:whitespace-nowrap font-extrabold  text-center ">
        Reach out
      </h1>
      <br></br>
      <ul className="flex flex-col items-center">
        <li
          className=" text-xl text-transparent bg-clip-text bg-gradient-to-br
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
