import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

type PlaneLayoutPropsType = {
  children: ReactNode;
};

const PlatformLayout = (props: PlaneLayoutPropsType) => {
  const { children } = props;

  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
