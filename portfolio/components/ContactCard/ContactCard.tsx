import Image from "next/image";
import Card from "../CardPrototypes/Card";
//@ts-ignore
import Obfuscate from "react-obfuscate";
import GithubIcon from "../../public/github.png";
import Link from "next/link";

const ContactCard = () => {
  return (
    <Card additionalStyles={"bg-card-secondary border-b-4"}>
      <p className="text-5xl mb-4 whitespace-normal lg:whitespace-nowrap font-extrabold text-center">
        Let&apos;s build something together.
      </p>

      <p className="text-lg text-center">
        Feel free to reach out if you are looking for a frontend developer,
        <br></br> have a question or just want to connect.
      </p>

      <ul className="flex flex-col items-center mt-10">
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
