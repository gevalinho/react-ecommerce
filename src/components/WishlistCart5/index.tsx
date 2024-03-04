import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  addToCart?: string;
  ipslcdgaming?: string;
  price?: string;
  sixtyfive?: string;
}

export default function WishlistCart5({
  addToCart = "Add To Cart",
  ipslcdgaming = "IPS LCD Gaming Monitor",
  price = "$1160",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full pt-3 bg-gray-100 rounded">
        <Button shape="square" className="w-[34px]">
          <Img src="images/img_quick_view.svg" />
        </Button>
        <div className="flex flex-row justify-center w-full max-w-[170px]">
          <Img src="images/img_g27cq4_500x500_1.png" alt="g27cq4500x500" className="w-full object-cover" />
        </div>
        <Button
          color="black_900_02"
          size="2xl"
          leftIcon={<Img src="images/img_cart1_white_a700.svg" alt="Cart1" />}
          className="w-full mt-8 gap-2 rounded-bl rounded-br"
        >
          {addToCart}
        </Button>
      </div>
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1.5 mx-auto max-w-[194px]">
        <Text as="p" className="!font-medium">
          {ipslcdgaming}
        </Text>
        <Text as="p" className="!text-red-600 !font-medium">
          {price}
        </Text>
        <div className="flex flex-row justify-start items-center gap-2">
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffad33"
            activeColor="#ffad33"
            size={20}
            className="flex justify-between w-[100px] rounded-[1px]"
          />
          <Heading as="h1" className="!text-black-900_87 opacity-0.5">
            {sixtyfive}
          </Heading>
        </div>
      </div>
    </div>
  );
}
