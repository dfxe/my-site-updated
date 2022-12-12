import Link from "next/link";
import Card from "../CardPrototypes/Card";

const OtherProjects = () => {
  return (
    <Card additionalStyles={"border-b-2 bg-card-important"}>
      <h1 className="mb-4 text-5xl font-extrabold text-center whitespace-normal lg:whitespace-nowrap text-background">
        Other Projects
      </h1>

      <ul className=" children:text-background children:text-xl list-square">
        <li>
          <Link
            href="
https://yordle.pages.dev/"
            target={"_blank"}
          >
            Yordle
          </Link>
        </li>
        <li>
          <Link
            href="
          https://handsify.pages.dev"
            target={"_blank"}
          >
            Handsify
          </Link>
        </li>
        <li>
          <Link
            href="
            https://c-b-analysis-expert.vercel.app/"
            target={"_blank"}
          >
            Cost Benefit Analysis interface
          </Link>
        </li>
        <li>
          <Link href="https://ruby-mid.pages.dev/" target={"_blank"}>
            Ruby for Instance
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default OtherProjects;
