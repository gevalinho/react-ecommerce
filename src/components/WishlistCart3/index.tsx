import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  addToCart?: string;
  quiltedsatin?: string;
  price?: string;
}

export default function WishlistCart3({
  addToCart = "Add To Cart",
  quiltedsatin = "Quilted Satin Jacket",
  price = "$750",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full pt-3 bg-gray-100 rounded">
        <div className="flex flex-col items-end justify-start w-full gap-[9px]">
          <div className="flex flex-row justify-end items-start w-[80%] mr-3">
            <Img
              src="images/img_698717_z8a1x_34.png"
              alt="698717z8a1xthir"
              className="w-[86%] mt-3 z-[1] object-cover"
            />
            <Button shape="square" className="w-[34px] ml-[-2px]">
              <Img src="images/img_icon_delete.svg" />
            </Button>
          </div>
          <Button
            color="black_900_02"
            size="2xl"
            leftIcon={<Img src="images/img_cart1_white_a700.svg" alt="Cart1" />}
            className="w-full gap-2 rounded-bl rounded-br"
          >
            {addToCart}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[7px]">
        <Text as="p" className="!font-medium">
          {quiltedsatin}
        </Text>
        <Text as="p" className="!text-red-600 !font-medium">
          {price}
        </Text>
      </div>
    </div>
  );
}
