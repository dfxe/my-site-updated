import Image from "next/image";
import Card from "../CardPrototypes/Card";
//@ts-ignore
import Obfuscate from "react-obfuscate";
import GithubIcon from "../../public/github.png";
import Link from "next/link";

const ContactCard = () => {
  return (
    <Card additionalStyles={"bg-card-secondary border-b-4"}>
      <p className="mb-4 text-5xl font-extrabold text-center whitespace-normal lg:whitespace-nowrap">
        Let&apos;s build something together
      </p>

      <p className="text-lg text-center text-secondary">
        Feel free to reach out if you are looking for a frontend developer,
        <br></br> have a question or just want to connect.
      </p>

      <ul className="flex flex-col items-center mt-10">
        <li className="mt-2 cursor-pointer">
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
