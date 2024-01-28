import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const logoFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="./">
      <div className="p-2 hover:opacity-75 transition items-center gap-x-2 hidden md:flex ">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <p className={cn("text-lg text-neutral-500", logoFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
