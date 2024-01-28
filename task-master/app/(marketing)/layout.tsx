import { ReactNode } from "react";

import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

type type = {
  children: ReactNode;
};

const MarketingLayout = (props: type) => {
  const { children } = props;

  return (
    <div className="h-full">
      <Navbar />

      <main className="pt-40 pb-20">{children}</main>

      <Footer />
    </div>
  );
};

export default MarketingLayout;
