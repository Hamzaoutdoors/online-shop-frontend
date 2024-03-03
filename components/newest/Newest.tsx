import React from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "../../hooks/useLanguage";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Link from "next/link";
import Card from "../UI/card/Card";
import { IProduct } from "../../lib/types/products";
import SectionTitle from "../UI/SectionTitle";
import { products } from "@/mock/products";

const Newest = () => {
  const { t } = useLanguage();
  const { width } = useWindowDimensions();
  let numProductToShow = width >= 1536 ? 12 : 8;

  /*   const { products } = useSelector((state: any) => state.products) as {
    products: IProduct[];
  }; */

  return (
    <div className="mx-auto my-4 md:my-8 flex flex-col xl:max-w-[2130px]">
      <SectionTitle title={"newest"} arrow />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products
          ? products.slice(0, numProductToShow).map((product: IProduct) => {
              return (
                <Card
                  key={`${product.name}-${product.id}`}
                  product={product}
                  displayStars
                />
              );
            })
          : null}
      </div>

      <div className="text-center">
        <Link href="/newestProducts">
          <span className="inline-block py-3 px-8 md:px-12 mt-4 text-sm md:text-base bg-palette-primary text-palette-side rounded-xl shadow-lg">
            {t.seeAllNewProducts}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Newest;
