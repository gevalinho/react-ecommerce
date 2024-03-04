import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  _new?: string;
  addToCart?: string;
  havithvgninetyt?: string;
  price?: string;
  sixtyfive?: string;
}

export default function WishlistCart6({
  _new = "NEW",
  addToCart = "Add To Cart",
  havithvgninetyt = "HAVIT HV-G92 Gamepad",
  price = "$560",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full pt-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-full gap-[21px]">
          <div className="flex flex-row justify-start items-start w-full gap-[3px] max-w-[246px]">
            <div className="flex flex-col items-start justify-start w-[85%]">
              <Button color="green_A400" size="sm" shape="round" className="min-w-[51px]">
                {_new}
              </Button>
              <div className="flex flex-row justify-end mt-[-2px] ml-[37px]">
                <Img src="images/img_g92_2_500x500_1.png" alt="g922500x500one" className="w-full object-cover" />
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
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1.5 mx-auto max-w-[201px]">
        <Text as="p" className="!font-medium">
          {havithvgninetyt}
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
