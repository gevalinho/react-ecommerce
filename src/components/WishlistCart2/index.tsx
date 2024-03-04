import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  addToCart?: string;
  gp11shooter?: string;
  price?: string;
}

export default function WishlistCart2({
  addToCart = "Add To Cart",
  gp11shooter = "GP11 Shooter USB Gamepad",
  price = "$550",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-end justify-start w-full pt-3 gap-[22px] bg-gray-100 rounded">
        <div className="flex flex-row justify-end items-start w-[79%] mr-3">
          <div className="flex flex-row justify-end w-[84%] mt-[25px]">
            <Img src="images/img_gp11_prd3_1.png" alt="gp11prd3one_one" className="w-full object-cover" />
          </div>
          <Button shape="square" className="w-[34px]">
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
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1.5 mx-auto max-w-[221px]">
        <Text as="p" className="!font-medium">
          {gp11shooter}
        </Text>
        <Text as="p" className="!text-red-600 !font-medium">
          {price}
        </Text>
      </div>
    </div>
  );
}
