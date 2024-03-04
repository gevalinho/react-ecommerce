import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  addToCart?: string;
  rgbliquidcpu?: string;
  price?: string;
}

export default function WishlistCart1({
  addToCart = "Add To Cart",
  rgbliquidcpu = "RGB liquid CPU Cooler",
  price = "$1960",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full pt-3 bg-gray-100 rounded">
        <Button shape="square" className="w-[34px]">
          <Img src="images/img_icon_delete.svg" />
        </Button>
        <div className="flex flex-row justify-center w-full mt-[19px] max-w-[190px]">
          <Img src="images/img_gammaxx_l240_argb_1_500x500.png" alt="gammaxxl240_one" className="w-full object-cover" />
        </div>
        <Button
          color="black_900_02"
          size="2xl"
          leftIcon={<Img src="images/img_cart1_white_a700.svg" alt="Cart1" />}
          className="w-full mt-[49px] gap-2 rounded-bl rounded-br"
        >
          {addToCart}
        </Button>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-1.5 mx-auto max-w-[176px]">
        <Text as="p" className="!font-medium">
          {rgbliquidcpu}
        </Text>
        <Text as="p" className="!text-red-600 !font-medium">
          {price}
        </Text>
      </div>
    </div>
  );
}
