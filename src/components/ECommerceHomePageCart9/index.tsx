import React from "react";
import { RatingBar, Heading, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  _new?: string;
  gp11shooter?: string;
  price?: string;
  fiftyfive?: string;
}

export default function ECommerceHomePageCart9({
  _new = "NEW",
  gp11shooter = "GP11 Shooter USB Gamepad",
  price = "$660",
  fiftyfive = "(55)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-3 bg-gray-100 rounded">
        <div className="flex flex-row justify-center items-start w-full mb-[38px] max-w-[246px]">
          <div className="flex flex-col items-start justify-start w-[87%] gap-3">
            <Button color="green_A400" size="sm" shape="round" className="min-w-[51px]">
              {_new}
            </Button>
            <div className="flex flex-row justify-end ml-[34px]">
              <Img src="images/img_gp11_prd3_1.png" alt="gp11prd3one_one" className="w-full object-cover" />
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
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1.5 mx-auto max-w-[221px]">
        <Text as="p" className="!font-medium">
          {gp11shooter}
        </Text>
        <div className="flex flex-row justify-start items-center w-[86%] gap-2">
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
