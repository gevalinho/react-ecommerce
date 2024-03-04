import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  asusfhdgaming?: string;
  price?: string;
  threehundredtwe?: string;
}

export default function ECommerceHomePageCart6({
  asusfhdgaming = "ASUS FHD Gaming Laptop",
  price = "$700",
  threehundredtwe = "(325)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-start w-full p-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-[70%] my-[23px]">
          <Img src="images/img_ideapad_gaming_3i_01_500x500.png" alt="ideapadgaming" className="w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-start w-[14%] ml-[3px] gap-2">
          <Button className="w-[34px]">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button className="w-[34px]">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[5px] mx-auto max-w-[206px]">
        <Text as="p" className="!font-medium">
          {asusfhdgaming}
        </Text>
        <div className="flex flex-row justify-start items-center w-[96%] gap-2">
          <Text as="p" className="!text-red-600 !font-medium">
            {price}
          </Text>
          <div className="flex flex-row justify-start items-center w-[76%] gap-2">
            <RatingBar
              value={5}
              isEditable={true}
              color="#00000071"
              activeColor="#ffad33"
              size={20}
              className="flex justify-between w-[100px] rounded-[1px]"
            />
            <Heading as="h1" className="!text-black-900_87 opacity-0.5">
              {threehundredtwe}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
