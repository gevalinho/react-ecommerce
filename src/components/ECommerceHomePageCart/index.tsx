import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  thenorthcoat?: string;
  price?: string;
  price1?: string;
  sixtyfive?: string;
}

export default function ECommerceHomePageCart({
  thenorthcoat = "The north coat",
  price = "$260",
  price1 = "$360",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-start w-full gap-[19px] p-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-[57%] my-10">
          <Img src="images/img_672462_zah9d_56.png" alt="672462zah9dfift" className="w-full object-cover" />
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
      <div className="flex flex-col items-start justify-start w-[52%] gap-[7px]">
        <Text as="p" className="!font-medium">
          {thenorthcoat}
        </Text>
        <div className="flex flex-row justify-start w-full gap-3 mx-auto max-w-[94px]">
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
