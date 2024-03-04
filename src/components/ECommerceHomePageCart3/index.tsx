import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  smallbookself?: string;
  price?: string;
  sixtyfive?: string;
}

export default function ECommerceHomePageCart3({
  smallbookself = "Small BookSelf",
  price = "$360",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-start w-full gap-[19px] p-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-[57%] my-[25px]">
          <Img src="images/img_sam_moghadam_kh_176x140.png" alt="sammoghadamkh" className="w-full object-cover" />
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
          {smallbookself}
        </Text>
        <Text as="p" className="!text-red-600 !font-medium">
          {price}
        </Text>
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
