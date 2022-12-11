import Card from "../CardPrototypes/Card";

const AboutCard = () => {
  return (
    <Card additionalStyles={"border-b-2 bg-card-secondary"}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-5xl whitespace-nowrap">
          Hi, I&apos;m{" "}
          <span className="pb-2 text-5xl font-extrabold text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-br from-pink to-red">
            Dragos
          </span>{" "}
        </h1>
        <p className="mx-4 text-xl text-center lg:mx-56">
          Frontend developer based in London. Responsible for the design and
          implementation of bespoke software.
        </p>
      </div>
    </Card>
  );
};

export default AboutCard;
