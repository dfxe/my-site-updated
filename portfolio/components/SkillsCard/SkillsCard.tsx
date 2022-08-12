import Card from "../CardPrototypes/Card";

const SkillsCard = () => {
  return (
    <Card additionalStyles={"border-b-2 bg-card-important"}>
      <h1 className="text-4xl whitespace-normal lg:whitespace-nowrap font-extrabold text-background text-center mb-4">
        Skills
      </h1>

      <ul className=" children:text-background children:text-xl list-square">
        <li>React</li>
        <li>Nextjs</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>.NET</li>
      </ul>
    </Card>
  );
};

export default SkillsCard;
