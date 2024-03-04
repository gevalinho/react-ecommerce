import React from "react";
import { Heading, RatingBar, Text, Img, Button } from "./..";

interface Props {
  className?: string;
  rgbliquidcpu?: string;
  price?: string;
  price1?: string;
  sixtyfive?: string;
}

export default function ECommerceHomePageCart2({
  rgbliquidcpu = "RGB liquid CPU Cooler",
  price = "$160",
  price1 = "$170",
  sixtyfive = "(65)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="h-[250px] w-full p-3 bg-gray-100 relative rounded">
        <div className="flex flex-col items-center justify-start w-[13%] gap-2 right-[4%] top-[5%] m-auto absolute">
          <Button className="w-[34px]">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button className="w-[34px]">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
        <div className="flex flex-row justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
          <Img src="images/img_gammaxx_l240_argb_1_500x500.png" alt="gammaxxl240_one" className="w-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-1.5 mx-auto max-w-[176px]">
        <Text as="p" className="!font-medium">
          {rgbliquidcpu}
        </Text>
        <div className="flex flex-row justify-start gap-3">
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
