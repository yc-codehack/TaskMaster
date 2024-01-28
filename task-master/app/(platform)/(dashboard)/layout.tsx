import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";

type DashboardLayoutPropsType = {
  children: ReactNode;
};

const DashboardLayout = (props: DashboardLayoutPropsType) => {
  const { children } = props;

  return (
    <div className="h-full">
      <Navbar />

      <main className="">{children}</main>
    </div>
  );
};

export default DashboardLayout;
