import Card from "../CardPrototypes/Card";
import { nanoid } from "nanoid";
const BlogCard = () => {
  const blogMeta = [
    {
      id: nanoid(),
      date: "22.06.22",
      path: "blog/post-one",
      title: "Labrador",
      shortDescription: "Homebuilding part two",
    },
    {
      id: nanoid(),
      date: "22.06.22",
      path: "blog/post-two",
      title: "Labrador",
      shortDescription: "Distro avs?",
    },
  ];
  return (
    <Card additionalStyles="border-b-2 bg-card-secondary">
      <h1
        className="text-5xl font-extrabold text-center
            mb-20 whitespace-nowrap"
      >
        Blog Posts
      </h1>

      <ul>
        {blogMeta.map((item, i) => (
          <li key={nanoid()}>
            <div className="flex justify-between">
              <span>{i + 1}&nbsp;</span>
              <span>{item.date}</span>
            </div>
            <a href={item.path}>
              <p
                className="text-2xl bg-clip-text bg-gradient-to-br text-transparent
           from-pink to-red"
              >
                | {item.title}
              </p>
              <h4 className="text-xl">{item.shortDescription}</h4>
            </a>
            <br />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BlogCard;
