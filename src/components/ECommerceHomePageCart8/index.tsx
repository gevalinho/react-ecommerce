import React from "react";
import { RatingBar, Heading, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  jrzoomsoccer?: string;
  price?: string;
  thirtyfive?: string;
}

export default function ECommerceHomePageCart8({
  jrzoomsoccer = "Jr. Zoom Soccer Cleats",
  price = "$1160",
  thirtyfive = "(35)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end w-full p-3 bg-gray-100 rounded">
        <div className="flex flex-row justify-end items-start w-[88%] mb-[31px]">
          <Img src="images/img_copa_sense_1.png" alt="copasenseone" className="w-[87%] mt-[31px] z-[1] object-cover" />
          <div className="flex flex-col items-center justify-start w-[16%] ml-[-4px] gap-2">
            <Button className="w-[34px]">
              <Img src="images/img_wishlist.svg" />
            </Button>
            <Button className="w-[34px]">
              <Img src="images/img_quick_view.svg" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[7px] mx-auto max-w-[191px]">
        <Text as="p" className="!font-medium">
          {jrzoomsoccer}
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
              {thirtyfive}
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
