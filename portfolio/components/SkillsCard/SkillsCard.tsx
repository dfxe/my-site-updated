import Card from "../CardPrototypes/Card";

const SkillsCard = () => {
  return (
    <Card additionalStyles={"border-b-2 bg-card-important"}>
      <h1 className="mb-4 text-5xl font-extrabold text-center whitespace-normal lg:whitespace-nowrap text-background">
        Skills
      </h1>

      <ul className=" children:text-background children:text-xl list-square">
        <li>React</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Nextjs</li>

        <li>Python</li>
        <li>.NET</li>
        <li>Linux</li>
      </ul>
    </Card>
  );
};

export default SkillsCard;
