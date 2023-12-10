import React from "react";
import { useExchangeRateGBPToIRR } from "../../hooks/useExchangeRateGBPToIRR";
import { useLanguage } from "../../hooks/useLanguage";
import { calculateDiscountPercentage } from "../../utilities/calculateDiscountPercentage";
import { gbpCurrencyFormat } from "../../utilities/currencyFormat";

interface Props {
  price: number;
  discount?: number;
  isLargeSize?: boolean;
  isInSlider?: boolean;
}
const ProductPrice: React.FC<Props> = ({
  price,
  discount,
  isLargeSize = false,
  isInSlider,
}) => {
  const { t, locale } = useLanguage();
  const irPrice = useExchangeRateGBPToIRR(price);
  const discountPrice = discount
    ? calculateDiscountPercentage(price, discount)
    : 0;
  const irDiscountPrice = useExchangeRateGBPToIRR(discountPrice);

  //style base on component position
  const textMainPriceSize = isLargeSize
    ? "text-xl md:text-3xl"
    : "text-md md:text-lg";
  const textDiscountPriceSize = isLargeSize
    ? "text-md md:text-xl"
    : "text-[11px] md:text-md";
  const justifyContent = isInSlider && locale === "fr" ? "flex-end" : "";

  return (
    <div className="flex md:justify-end" style={{ justifyContent }}>
      {discount ? (
        <div className="flex flex-row">
          <div className="flex items-center">
            <ins
              className={`font-bold self-end no-underline mt-1x mr-3 ${textMainPriceSize}`}
            >
              <sup className="mr-1">{locale === "fr" ? "DH" : ""}</sup>
              {locale === "fr"
                ? gbpCurrencyFormat(discountPrice)
                : irDiscountPrice}
            </ins>
            <del
              className={`text-rose-800 dark:text-rose-200 md:text-xs ${textDiscountPriceSize}`}
            >
              <sup className="mr-1">{locale === "fr" ? "DH" : ""}</sup>
              {locale === "fr" ? gbpCurrencyFormat(price) : irPrice}
            </del>
          </div>
          <span
            className="text-green-800 dark:text-green-200 ml-1 text-[12px] inline-block"
            style={{ direction: "ltr" }}
          >{`(-%${discount})`}</span>
        </div>
      ) : (
        <div>
          {isInSlider ? <div className="h-[1.4rem]"></div> : null}{" "}
          {/* ☝slider cards (.slick-slide=>Slider component) are float and because of that, they don't accept height so, for making cards the same height, I have to do this hack*/}
          <div
            className={`flex items-center ${textMainPriceSize} font-bold no-underline`}
            style={{ flexDirection: "row" }}
          >
            <sup className="mr-1">{locale === "fr" ? "DH" : "DH"}</sup>
            <span>{locale === "fr" ? gbpCurrencyFormat(price) : irPrice}</span>
            <sub className="ml-1 text-[10px]">{locale === "fr" ? "" : ""}</sub>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
