import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  gucciduffle?: string;
  price?: string;
  price1?: string;
  sixtyfive?: string;
}

export default function ECommerceHomePageCart1({
  gucciduffle = "Gucci duffle bag",
  price = "$960",
  price1 = "$1160",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-start w-full p-3 bg-gray-100 rounded">
        <div className="flex flex-row justify-end w-[73%] my-12">
          <Img src="images/img_547953_9c2st_87.png" alt="5479539c2steigh" className="w-full object-cover" />
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
      <div className="flex flex-col items-start justify-start w-[52%] gap-1.5">
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
            {sixtyfive}
          </Heading>
        </div>
      </div>
    </div>
  );
}
