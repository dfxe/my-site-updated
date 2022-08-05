import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center text-base mx-4 my-4">
      <div className="flex row  text-6xl">
        <Link href="/">@dfxe</Link>
      </div>

      <div className="flex justify-end children:px-10">
        <Link href="/">Home</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/About">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
