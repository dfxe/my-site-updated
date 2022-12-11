import { useEffect } from "react";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";
import anime from "animejs";
import { blogPosts } from "../../../lib/blog-posts";
import Link from "next/link";
const PostThree = () => {
  useEffect(() => {
    if (typeof window != "undefined") {
      document.documentElement.style.left = "0px";
    }
    anime({
      targets: "body",
      translateX: [0, 0],
      translateY: [0, 0],

      duration: 500,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <>
      <BackLinkButton linkToPage={"/blog"} />
      <div className="flex flex-col mx-4 mb-24 xl:mx-96">
        <h1 className="my-5 text-2xl xl:text-6xl">{blogPosts[2].title}</h1>
        <p className="text-secondary">by dfxe</p>
        <Link href="https://github.com/dfxe/planningly-alpha">
          See the webapp here.
        </Link>
        <div className="mt-4">
          <div className="flex justify-between mb-4">
            <p style={{ flex: "50%", textAlign: "justify" }}>
              <b>Setup</b>
              <li className="list-square text-secondary">
                I am using pnpm as a package manager, just to try it out.
              </li>{" "}
              <li className="list-square text-secondary">
                Qwik comes with inbuilt Vite <br />{" "}
              </li>
              <li className="list-square text-secondary">
                Qwik has TypeScript by default{" "}
              </li>
              <li className="list-square text-secondary">
                Using pure css to because of compatibility{" "}
              </li>
              <br />
              Deployment options:
              <table>
                <tr>
                  <th></th>
                  <th>Qwik</th>
                  <th>React</th>
                </tr>
                <tr>
                  <td className="font-bold"> Vercel</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td className="font-bold"> Netlify</td>
                  <td>?</td>
                  <td>yes</td>
                </tr>

                <tr>
                  <td className="font-bold"> Cloudflare Pages</td>
                  <td>yes</td>
                  <td>yes</td>
                </tr>
              </table>
              <br />
            </p>
            <div className="mx-4 xl:mx-6"></div>
            <p style={{ flex: "50%", textAlign: "justify" }}>
              <b>Deploying to Cloudflare Pages</b> <br />
              <li className="list-square text-secondary">
                {" "}
                Right now, you have to configure the backend to make it work. No
                batteries included, the framework is still in some alpha state
                when it comes to pre-configurations. Furthermore, esbuild minus
                framework documentation result in wasted hours on type matching.{" "}
                <br />
              </li>
              <li className="list-square text-secondary">
                At the time of first attempting this (3 oct), the cloudflare
                pages integration did not work properly and hacks did just brake
                everything, that&apos;s all.
              </li>
              <li className="list-square text-secondary">
                window:onLoad in Qwik replaces the window is undefined check
                needed in dev environments in React
              </li>
              <li className="list-square text-secondary">
                Cloudflare pages and wrangler (workers) has perfect integration
                for this server side resumability loading
              </li>
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ flex: "50%", textAlign: "justify" }}>
              <b>Differences</b>
              <br />
              <p className="text-secondary">
                {" "}
                No more key attribute when looping over a list, Qwik does that
                automagically with q:id. <br />
                It&apos;s about pockets of when things happen and not, current
                build is buggy
              </p>
            </p>
            <div className="mx-4 xl:mx-6"></div>
            <p style={{ flex: "50%", textAlign: "justify" }}>
              <b>Conclusion</b>
              <br />{" "}
              <p className="text-secondary">
                This framework can have a promising future alongside React and
                other React inspired frameworks. If initial load performance is
                critical and you need to build a quick SSG site with a better
                learning curve, this is for you.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostThree;
