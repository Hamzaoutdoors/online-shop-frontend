import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0">
        <Image
          src="/images/logo2.png"
          alt="zishop-logo"
          width={80}
          height={20}
          className="cursor-pointer md:ltr:-mr-3"
          style={{ objectFit: "cover" }}
        />
      </div>
    </Link>
  );
};

export default Logo;
