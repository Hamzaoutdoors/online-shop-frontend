import React from "react";
import { IProduct } from "../../lib/types/products";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";
import Card from "../UI/card/Card";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.map((product) => (
          <Card key={product.id} product={product} displayStars={false} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
