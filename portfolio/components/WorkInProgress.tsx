import Image from "next/image";

export default function WorkInProgress() {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/wip.svg"
          alt="work in progress"
          width={100}
          height={100}
        ></Image>
        <h1 className="text-2xl font-bold">Maintenance in progress.</h1>
        <h2>We will be right back.</h2>
      </div>
    </div>
  );
}
