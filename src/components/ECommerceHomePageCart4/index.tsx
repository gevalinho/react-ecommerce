import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  breeddrydog?: string;
  price?: string;
  thirtyfive?: string;
}

export default function ECommerceHomePageCart4({
  breeddrydog = "Breed Dry Dog Food",
  price = "$100",
  thirtyfive = "(35)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-start w-full gap-[31px] p-3 bg-gray-100 rounded">
        <div className="flex flex-col items-center justify-start w-[47%] my-[23px]">
          <Img src="images/img_71rdoexxtrl_1.png" alt="71rdoexxtrlone" className="w-full object-cover" />
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
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[5px] mx-auto max-w-[185px]">
        <Text as="p" className="!font-medium">
          {breeddrydog}
        </Text>
        <div className="flex flex-row justify-start items-center w-full gap-2">
          <Text as="p" className="!text-red-600 !font-medium">
            {price}
          </Text>
          <div className="flex flex-row justify-start items-center w-[76%] gap-2">
            <RatingBar
              value={3}
              isEditable={true}
              color="#00000071"
              activeColor="#ffad33"
              size={20}
              className="flex justify-between w-[100px] rounded-[1px]"
            />
            <Heading as="h1" className="!text-black-900_87 opacity-0.5">
              {thirtyfive}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
