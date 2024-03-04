import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  thirtyfive?: string;
  addToCart?: string;
  gucciduffle?: string;
  price?: string;
  price1?: string;
}

export default function WishlistCart({
  thirtyfive = "-35%",
  addToCart = "Add To Cart",
  gucciduffle = "Gucci duffle bag",
  price = "$960",
  price1 = "$1160",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full pt-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-between items-start w-full max-w-[246px]">
            <Button color="red_600" size="sm" shape="round" className="min-w-[55px]">
              {thirtyfive}
            </Button>
            <Button shape="square" className="w-[34px]">
              <Img src="images/img_icon_delete.svg" />
            </Button>
          </div>
          <div className="flex flex-row justify-center w-full mt-[-5px] max-w-[178px]">
            <Img src="images/img_547953_9c2st_87.png" alt="5479539c2steigh" className="w-full object-cover" />
          </div>
          <Button
            color="black_900_02"
            size="2xl"
            leftIcon={<Img src="images/img_cart1_white_a700.svg" alt="Cart1" />}
            className="w-full mt-[39px] gap-2 rounded-bl rounded-br"
          >
            {addToCart}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-[50%] gap-1.5">
        <Text as="p" className="!font-medium">
          {gucciduffle}
        </Text>
        <div className="flex flex-row justify-start w-full gap-3 mx-auto max-w-[97px]">
          <Text as="p" className="!text-red-600 !font-medium">
            {price}
          </Text>
          <Text as="p" className="!text-black-900_87 !font-medium opacity-0.5 line-through">
            {price1}
          </Text>
        </div>
      </div>
    </div>
  );
}
