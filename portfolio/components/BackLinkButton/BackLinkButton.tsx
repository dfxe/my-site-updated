import Link from "next/link";
import { ReactElement } from "react";
type Props = {
  linkToPage: string;
};
const BackLinkButton = ({ linkToPage }: Props): ReactElement => {
  return (
    <Link href={linkToPage}>
      <button
        role="button"
        style={{
          backgroundColor: "white",
          width: "6rem",
          height: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 26 26"
        >
          <path d="M10.018 18v-5h10V5h-10V0L0 8.939 10.018 18z" />
        </svg>
      </button>
    </Link>
  );
};
export default BackLinkButton;
