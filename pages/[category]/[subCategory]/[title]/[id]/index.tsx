import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useEffect } from "react";
import ProductDetails from "../../../../../components/productDetails";
import { IProduct } from "../../../../../lib/types/products";
import { Ip_port } from "@/constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useDispatch } from "react-redux";
import { setProduct } from "@/store/api";

const ProductDetailsPage: NextPage<{
  product: IProduct;
}> = ({ product }) => {
  const { currentProduct } = useSelector((state: RootState) => state.products);

  /* const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!currentProduct || currentProduct.id !== product.id) {
      dispatch(setProduct(product));
    }
  }, [product, dispatch, currentProduct]); */

  return (
    <div className="container mx-auto px-4 lg:mt-8">
      <ProductDetails />
    </div>
  );
};

interface Params {
  id: string;
}

export async function getServerSideProps({ params }: { params: Params }) {
  try {
    const { id } = params;
    const response = await axios.get(
      `${Ip_port.Adresse}/api/products/${id}?join=category&join=images`
    );

    return {
      props: {
        product: response.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        product: {},
      },
    };
  }
}

export default ProductDetailsPage;
