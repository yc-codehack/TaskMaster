import { ReactNode } from "react";

type type = {
  children: ReactNode;
};

const MarketingLayout = (props: type) => {
  const { children } = props;

  return (
    <div className="h-full">
      {/* navbar */}

      {/* main */}
      <main className="pt-40 pb-20">{children}</main>

      {/* footer */}
    </div>
  );
};

export default MarketingLayout;
