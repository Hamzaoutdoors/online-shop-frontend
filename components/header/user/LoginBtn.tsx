import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";

const LoginBtn = () => {
  const { t } = useLanguage();
  return (
    //TODO: change this to <Link href={"/login"}>
    <Link href={"/"}>
      <div aria-label="User actions">
        <div className="hidden md:flex items-center rounded-lg  py-1 px-2 mr-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
          <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
          <p className="ml-2 text-xs">
            {t.login} | {t.signUp}
          </p>
        </div>
        <div className="md:hidden mr-3 :ml-1">
          <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
        </div>
      </div>
    </Link>
  );
};

export default LoginBtn;
