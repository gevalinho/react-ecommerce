import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  curologyTwo?: string;
  price?: string;
  onehundredforty?: string;
}

export default function AccountDropdownWithAccountCartwithflat({
  curologyTwo = "Curology Product Set ",
  price = "$500",
  onehundredforty = "(145)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-start w-full p-3 bg-gray-100 rounded">
        <Img
          src="images/img_curology_j7pkvqrtusm_unsplash.png"
          alt="curology_one"
          className="w-[70%] mt-[34px] mb-[33px] object-cover"
        />
        <div className="flex flex-col items-center justify-start w-[14%] ml-[3px] gap-2">
          <Button className="w-[34px]">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button className="w-[34px]">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[5px] mx-auto max-w-[198px]">
        <Text as="p" className="!font-medium">
          {curologyTwo}
        </Text>
        <div className="flex flex-row justify-start items-center w-full gap-2">
          <Text as="p" className="!text-red-600 !font-medium">
            {price}
          </Text>
          <div className="flex flex-row justify-start items-center w-[75%] gap-2">
            <RatingBar
              value={4}
              isEditable={true}
              color="#00000071"
              activeColor="#ffad33"
              size={20}
              className="flex justify-between w-[100px] rounded-[1px]"
            />
            <Heading as="h1" className="!text-black-900_87 opacity-0.5">
              {onehundredforty}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
