import Image from "next/image";
import Card from "../CardPrototypes/Card";
//@ts-ignore
import Obfuscate from "react-obfuscate";
import GithubIcon from "../../public/github.png";
import Link from "next/link";

const ContactCard = () => {
  return (
    <Card additionalStyles={"bg-card-secondary"}>
      <h1 className="text-title whitespace-normal lg:whitespace-nowrap font-extrabold text-center">
        Let&apos;s build something together.
      </h1>
      <h2 className="text-lg text-center">
        Feel free to reach out if you are looking for a frontend developer,
        <br></br> have a question or just want to connect.
      </h2>

      <ul className="flex flex-col items-center mt-10">
        <li
          className=" text-xl text-transparent bg-clip-text bg-gradient-to-br
           from-pink to-red"
        >
          <Obfuscate email="dfldev@proton.me" />{" "}
        </li>

        <li className="cursor-pointer mt-2">
          <Link
            href="https://github.com/dfxe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github icon" width={32} height={32} />
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default ContactCard;
