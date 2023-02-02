import Card from "../CardPrototypes/Card";

const OtherProjects = () => {
  return (
    <Card additionalStyles={"border-b-2 bg-card-important"}>
      <h1 className="mb-4 text-5xl font-extrabold text-center whitespace-normal lg:whitespace-nowrap text-background">
        Other Projects
      </h1>

      <ul className=" children:text-background children:text-xl list-square">
        <li>
          <a
            href="
https://yordle.pages.dev/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Yordle
          </a>
        </li>
        <li>
          <a
            href="
          https://handsify.pages.dev"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Handsify
          </a>
        </li>
        <li>
          <a
            href="
            https://c-b-analysis-expert.vercel.app/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Cost Benefit Analysis interface
          </a>
        </li>
        <li>
          <a
            href="https://ruby-mid.pages.dev/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Ruby for Instance
          </a>
        </li>
        <li>
          <a
            href="
https://patternbay.vercel.app/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Pattern Bay
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default OtherProjects;
