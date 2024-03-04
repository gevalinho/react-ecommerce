import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  discount?: string;
  ipslcdgaming?: string;
  threehundredsev?: string;
  fourhundred?: string;
  ninetynine?: string;
}

export default function ECommerceHomePageCartwithflat1({
  discount = "-30%",
  ipslcdgaming = "IPS LCD Gaming Monitor",
  threehundredsev = "$370",
  fourhundred = "$400",
  ninetynine = "(99)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-3 bg-gray-100 rounded">
        <div className="flex flex-row justify-start items-start w-full mb-12 gap-1 max-w-[246px]">
          <div className="flex flex-col items-start justify-start w-[85%] gap-[23px]">
            <Button color="red_600" size="sm" shape="round" className="min-w-[55px]">
              {discount}
            </Button>
            <div className="flex flex-row justify-end ml-[38px]">
              <Img src="images/img_g27cq4_500x500_1.png" alt="g27cq4500x500" className="w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[14%] gap-2">
            <Button className="w-[34px]">
              <Img src="images/img_wishlist.svg" />
            </Button>
            <Button className="w-[34px]">
              <Img src="images/img_quick_view.svg" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1.5 mx-auto max-w-[194px]">
        <Text as="p" className="!font-medium">
          {ipslcdgaming}
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
            value={5}
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
