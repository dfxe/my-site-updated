import Link from "next/link";
import { ReactElement } from "react";
type Props = {
  linkToPage: string;
};
const BackToAnotherPageButton = ({ linkToPage }: Props): ReactElement => {
  return (
    <button>
      <Link href={linkToPage}>&#9754;</Link>
    </button>
  );
};
export default BackToAnotherPageButton;
