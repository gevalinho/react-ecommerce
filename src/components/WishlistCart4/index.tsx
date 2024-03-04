import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  thirtyfive?: string;
  addToCart?: string;
  asusfhdgaming?: string;
  price?: string;
  price1?: string;
  sixtyfive?: string;
}

export default function WishlistCart4({
  thirtyfive = "-35%",
  addToCart = "Add To Cart",
  asusfhdgaming = "ASUS FHD Gaming Laptop",
  price = "$960",
  price1 = "$1160",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full pt-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-full gap-3.5">
          <div className="flex flex-row justify-start items-start w-full gap-2.5 max-w-[246px]">
            <div className="h-[183px] w-[83%] relative">
              <div className="flex flex-row justify-center w-[28%] left-0 top-0 p-[3px] m-auto bg-red-600 absolute rounded">
                <Text size="xs" as="p" className="!text-gray-50 !font-normal">
                  {thirtyfive}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[79%] bottom-0 right-0 m-auto absolute">
                <Img src="images/img_ideapad_gaming_3i_01_500x500.png" alt="image" className="w-full object-cover" />
              </div>
            </div>
            <Button shape="square" className="w-[34px]">
              <Img src="images/img_quick_view.svg" />
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
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1.5 mx-auto max-w-[206px]">
        <Text as="p" className="!font-medium">
          {asusfhdgaming}
        </Text>
        <div className="flex flex-row justify-start gap-3">
          <Text as="p" className="!text-red-600 !font-medium">
            {price}
          </Text>
          <Text as="p" className="!text-black-900_87 !font-medium opacity-0.5 line-through">
            {price1}
          </Text>
        </div>
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
