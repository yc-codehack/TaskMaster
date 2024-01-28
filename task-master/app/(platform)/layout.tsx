import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

type PlaneLayoutPropsType = {
  children: ReactNode;
};

const PlatformLayout = (props: PlaneLayoutPropsType) => {
  const { children } = props;

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
