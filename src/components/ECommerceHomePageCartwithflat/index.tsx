import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  discount?: string;
  sseries?: string;
  threehundredsev?: string;
  fourhundred?: string;
  ninetynine?: string;
}

export default function ECommerceHomePageCartwithflat({
  discount = "-25%",
  sseries = "S-Series Comfort Chair ",
  threehundredsev = "$375",
  fourhundred = "$400",
  ninetynine = "(99)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center items-start w-full p-3 bg-gray-100 rounded">
        <Button color="red_600" size="sm" shape="round" className="min-w-[55px]">
          {discount}
        </Button>
        <div className="flex flex-col items-center justify-start w-[44%] ml-3.5 my-[23px]">
          <Img src="images/img_sam_moghadam_kh.png" alt="sammoghadamkh" className="w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-start w-[14%] ml-9 gap-2">
          <Button className="w-[34px]">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button className="w-[34px]">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[7px] mx-auto max-w-[187px]">
        <Text as="p" className="!font-medium">
          {sseries}
        </Text>
        <div className="flex flex-row justify-start gap-3">
          <Text as="p" className="!text-red-600 !font-medium">
            {threehundredsev}
          </Text>
          <Text as="p" className="!text-black-900_87 !font-medium opacity-0.5 line-through">
            {fourhundred}
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
            {ninetynine}
          </Heading>
        </div>
      </div>
    </div>
  );
}
