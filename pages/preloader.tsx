import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("@/components/UI/preLoader/Preloader"));

const FirstScreen = () => {
  const { loading } = useSelector((state: RootState) => state.brands);

  return loading ? <Preloader /> : null; // Or a redirect component if already loaded
};

export default FirstScreen;
