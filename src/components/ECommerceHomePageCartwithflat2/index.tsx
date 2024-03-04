import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  discount?: string;
  addToCart?: string;
  ak900wired?: string;
  ninehundredsixt?: string;
  onethousandoneh?: string;
  seventyfive?: string;
}

export default function ECommerceHomePageCartwithflat2({
  discount = "-35%",
  addToCart = "Add To Cart",
  ak900wired = "AK-900 Wired Keyboard",
  ninehundredsixt = "$960",
  onethousandoneh = "$1160",
  seventyfive = "(75)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full pt-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-full gap-[53px]">
          <div className="h-[144px] w-full relative max-w-[246px]">
            <Button color="red_600" size="sm" shape="round" className="left-0 top-0 m-auto min-w-[55px] absolute">
              {discount}
            </Button>
            <div className="flex flex-col items-center justify-start w-[14%] gap-2 right-0 top-0 m-auto absolute">
              <Button className="w-[34px]">
                <Img src="images/img_wishlist.svg" />
              </Button>
              <Button className="w-[34px]">
                <Img src="images/img_quick_view.svg" />
              </Button>
            </div>
            <div className="flex flex-row justify-center w-[78%] bottom-0 right-0 left-0 m-auto absolute">
              <Img src="images/img_ak_900_01_500x500.png" alt="ak900one_one" className="w-full object-cover" />
            </div>
          </div>
          <Button color="black_900_02" size="3xl" className="w-full rounded-bl rounded-br font-medium">
            {addToCart}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-1.5 mx-auto max-w-[195px]">
        <Text as="p" className="!font-medium">
          {ak900wired}
        </Text>
        <div className="flex flex-row justify-start gap-3">
          <Text as="p" className="!text-red-600 !font-medium">
            {ninehundredsixt}
          </Text>
          <Text as="p" className="!text-black-900_87 !font-medium opacity-0.5 line-through">
            {onethousandoneh}
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
          <RatingBar
            value={4}
            isEditable={true}
            color="#00000071"
            activeColor="#ffad33"
            size={20}
            className="flex justify-between w-[100px] rounded-[1px]"
          />
          <Heading as="h1" className="!text-black-900_87 opacity-0.5">
            {seventyfive}
          </Heading>
        </div>
      </div>
    </div>
  );
}
