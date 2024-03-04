import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  addToCart?: string;
  ak900wired?: string;
  price?: string;
  sixtyfive?: string;
}

export default function WishlistCart7({
  addToCart = "Add To Cart",
  ak900wired = "AK-900 Wired Keyboard",
  price = "$200",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-end justify-start w-full pt-3 gap-[46px] bg-gray-100 rounded">
        <div className="flex flex-col items-start justify-start w-[81%] mr-3 gap-4">
          <Button shape="square" className="w-[34px] ml-[184px]">
            <Img src="images/img_quick_view.svg" />
          </Button>
          <div className="flex flex-row justify-start w-full mx-auto max-w-[190px]">
            <Img src="images/img_ak_900_01_500x500.png" alt="ak900one_one" className="w-full object-cover" />
          </div>
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
      <div className="flex flex-col items-start justify-start w-full gap-1.5 mx-auto max-w-[195px]">
        <Text as="p" className="!font-medium">
          {ak900wired}
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
