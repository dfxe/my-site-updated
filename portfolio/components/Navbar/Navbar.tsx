import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center text-base mx-4 my-4">
      <div className="flex row bg-pink w-72 text-6xl">
        <Link href="/">@dfxe</Link>
      </div>

      <div className="flex justify-end children:px-10">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
