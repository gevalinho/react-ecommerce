import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  p247customer?: string;
  friendly24seven?: string;
}

export default function AboutColumniconshopp({
  p247customer = "45.5k",
  friendly24seven = "Customer active in our site",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[80px] w-[80px]">
        <div className="h-[80px] w-[80px] relative">
          <Img
            src="images/img_group_1000005938.svg"
            alt="image"
            className="justify-center h-[80px] w-[80px] left-0 bottom-0 right-0 top-0 m-auto absolute"
          />
          <Img
            src="images/img_icon_shopping_bag.svg"
            alt="iconshopping"
            className="justify-center h-[40px] w-[40px] left-0 bottom-0 right-0 top-0 m-auto absolute"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-1.5 max-w-[215px]">
        <Heading size="xl" as="h1" className="tracking-[1.28px] !font-inter">
          {p247customer}
        </Heading>
        <Text as="p">{friendly24seven}</Text>
      </div>
    </div>
  );
}
