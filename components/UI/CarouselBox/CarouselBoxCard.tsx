import React from "react";
import Image from "next/image";
import { IProduct } from "../../../lib/types/products";
import Link from "next/link";
import ProductPrice from "../ProductPrice";
import { setProduct } from "@/store/api";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

interface Props {
  product: IProduct;
}

const CarouselBoxCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleProductClick = () => {
    dispatch(setProduct(product));
    router.push(
      `/${product.category.name}/${product.category.name}/${product.category.name}/${product.id}`
    );
  };
  return (
    <div className="w-full h-full px-2 my-2">
      <div
        className="flex flex-col w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md"
        onClick={handleProductClick}
      >
        <div className="text-center flex-grow">
          {product?.image?.path && (
            <Image
              src={product?.image?.path}
              alt="laptop image"
              width={200}
              height={185}
              className="object-contain hover:scale-105 transition-transform !p-2"
            />
          )}
          {product.discount ? (
            <span className="block absolute -top-2 -right-2">
              <Image
                src="/images/discount-icon/discount.webp"
                width={40}
                height={40}
                alt="discount-icon"
              />
            </span>
          ) : null}
        </div>
        <p className="truncate">{product?.name}</p>
        <ProductPrice
          price={product.price}
          discount={product.discount}
          isInSlider={true}
        />
      </div>
    </div>
  );
};

export default CarouselBoxCard;
