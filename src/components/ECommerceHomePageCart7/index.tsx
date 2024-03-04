import React from "react";
import { RatingBar, Heading, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  _new?: string;
  kidselectric?: string;
  price?: string;
  sixtyfive?: string;
}

export default function ECommerceHomePageCart7({
  _new = "NEW",
  kidselectric = "Kids Electric Car",
  price = "$960",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-3 bg-gray-100 rounded">
        <div className="flex flex-row justify-center items-start w-full mb-[46px] max-w-[246px]">
          <div className="flex flex-col items-start justify-start w-[87%] gap-[21px]">
            <Button color="green_A400" size="sm" shape="round" className="min-w-[51px]">
              {_new}
            </Button>
            <div className="flex flex-row justify-end ml-[33px]">
              <Img src="images/img_new_mercedes_be.png" alt="newmercedesbe" className="w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[14%] ml-[-1px] gap-2">
            <Button className="w-[34px]">
              <Img src="images/img_wishlist.svg" />
            </Button>
            <Button className="w-[34px]">
              <Img src="images/img_quick_view.svg" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-2 mx-auto max-w-[190px]">
        <Text as="p" className="!font-medium">
          {kidselectric}
        </Text>
        <div className="flex flex-row justify-start items-center w-full gap-2">
          <Text as="p" className="!text-red-600 !font-medium">
            {price}
          </Text>
          <div className="flex flex-row justify-start items-center w-[74%] gap-2">
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
