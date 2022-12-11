import Card from "../CardPrototypes/Card";
import { blogPosts } from "../../lib/blog-posts";
const BlogCard = () => {
  return (
    <Card additionalStyles="border-b-2 bg-card-secondary">
      <h1 className="mb-20 text-5xl font-extrabold text-center whitespace-nowrap">
        Blog Posts
      </h1>
      <ul>
        {blogPosts.map((item, i) => (
          <li key={i}>
            <div className="flex justify-between">
              <span className="text-secondary">{i + 1}&nbsp;</span>
              <span className="text-secondary">{item.date}</span>
            </div>
            <a href={item.path}>
              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-pink to-red">
                | {item.title}
              </p>
              <h4 className="text-xl text-secondary">
                {item.shortDescription}
              </h4>
            </a>
            <br />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BlogCard;
