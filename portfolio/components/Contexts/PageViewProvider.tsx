import React, { Dispatch, SetStateAction, useContext, useState } from "react";

type PageContextProps = {
  getter: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
};

const PageContext = React.createContext<PageContextProps>({
  setter: () => {},
  getter: false,
});
export const usePageContext = () => useContext(PageContext);
type Props = {
  children: React.ReactNode;
};
const PageViewProvider = ({ children }: Props) => {
  const [isOnHeroPage, setIsOnHeroPage] = useState<boolean>(true);
  return (
    <PageContext.Provider
      value={{ setter: setIsOnHeroPage, getter: isOnHeroPage }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageViewProvider;
