import Image from "next/image";
import Link from "next/link";
import React from "react";

function LogoComponent() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        width={1080}
        height={1080}
        src="/images/bogiel.png"
        className=" w-8 h-8 rounded-full object-cover"
        alt=""
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap ">
        Boogie
      </span>
    </Link>
  );
}

export default LogoComponent;
