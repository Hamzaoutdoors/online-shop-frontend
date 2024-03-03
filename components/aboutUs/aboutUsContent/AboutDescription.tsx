import Image from "next/image";
import React from "react";

const AboutDescription = () => {
  return (
    <div className="flex flex-col items-start w-[90%] h-[80%] px-4 my-2 m-0 bg-white">
      <div className="py-4">
        <Image
          src="/images/logo.png"
          alt="zishop-logo"
          width={50}
          height={50}
        />
      </div>
      <div className="py-4">
        <h1 className="font-bold text-base subpixel-antialiased">
          Intégration des systèmes de contrôle
        </h1>
      </div>
      <div className="py-2">
        <p className="font-light py-2">
          WiAutomation fournit des pièces détachées pour l&apos;automatisation
          industrielle et navale.
        </p>
        <p className="font-light py-2">Bienvenue à votre platform </p>
      </div>
    </div>
  );
};

export default AboutDescription;
