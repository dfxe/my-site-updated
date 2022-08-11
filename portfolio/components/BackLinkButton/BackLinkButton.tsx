import Link from "next/link";
import { ReactElement } from "react";
type Props = {
  linkToPage: string;
};
const BackLinkButton = ({ linkToPage }: Props): ReactElement => {
  return (
    <Link href={linkToPage}>
      <button
        style={{ backgroundColor: "white", width: "12rem", height: "12rem" }}
      >
        &#9754;
      </button>
    </Link>
  );
};
export default BackLinkButton;
