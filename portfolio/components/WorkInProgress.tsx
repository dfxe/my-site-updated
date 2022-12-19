import Image from "next/image";

export default function WorkInProgress() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Work in progress</h1>
      <h2>Will be right back</h2>
      <Image
        src="/wip.svg"
        alt="work in progress"
        width={100}
        height={100}
      ></Image>
    </div>
  );
}
