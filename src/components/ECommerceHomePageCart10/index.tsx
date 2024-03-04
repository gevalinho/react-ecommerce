import React from "react";
import { RatingBar, Heading, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  quiltedsatin?: string;
  price?: string;
  fiftyfive?: string;
}

export default function ECommerceHomePageCart10({
  quiltedsatin = "Quilted Satin Jacket",
  price = "$660",
  fiftyfive = "(55)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-start w-full p-3 bg-gray-100 rounded">
        <div className="flex flex-row justify-end w-[74%] my-[25px] z-[1]">
          <Img src="images/img_698717_z8a1x_34.png" alt="698717z8a1xthir" className="w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-start w-[14%] ml-[-2px] gap-2">
          <Button className="w-[34px]">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button className="w-[34px]">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[7px] mx-auto max-w-[190px]">
        <Text as="p" className="!font-medium">
          {quiltedsatin}
        </Text>
        <div className="flex flex-row justify-start items-center w-full gap-2">
          <Text as="p" className="!text-red-600 !font-medium">
            {price}
          </Text>
          <div className="flex flex-row justify-start items-center w-[74%] gap-2">
            <RatingBar
              value={4}
              isEditable={true}
              color="#00000071"
              activeColor="#ffad33"
              size={20}
              className="flex justify-between w-[100px] rounded-[1px]"
            />
            <Heading as="h1" className="!text-black-900_87 opacity-0.5">
              {fiftyfive}
            </Heading>
          </div>
        </div>
        <RatingBar
          value={1}
          isEditable={true}
          color="#00000071"
          activeColor="#ffad33"
          size={20}
          starCount={2}
          className="flex justify-between w-[48px] rounded-[1px]"
        />
      </div>
    </div>
  );
}
