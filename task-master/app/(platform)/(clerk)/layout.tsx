import { ReactNode } from "react";

type ClerkLayoutPropsType = {
  children: ReactNode;
};
const ClerkLayout = (props: ClerkLayoutPropsType) => {
  const { children } = props;

  return <div className="grid place-items-center h-full">{children}</div>;
};

export default ClerkLayout;
