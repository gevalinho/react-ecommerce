import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  image?: string;
  iconsaleOne?: string;
}

export default function AboutColumniconsale({
  image = "images/img_group_1000005938_white_a700.svg",
  iconsaleOne = "images/img_icon_sale.svg",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[80px] w-[80px]">
        <div className="h-[80px] w-[80px] relative">
          <Img
            src={image}
            alt="image"
            className="justify-center h-[80px] w-[80px] left-0 bottom-0 right-0 top-0 m-auto absolute"
          />
          <Img
            src={iconsaleOne}
            alt="iconsale_one"
            className="justify-center h-[40px] w-[40px] left-0 bottom-0 right-0 top-0 m-auto absolute"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[5px]">
        <Heading size="xl" as="h1" className="!text-white-A700 tracking-[1.28px] !font-inter">
          33k
        </Heading>
        <Text as="p" className="!text-white-A700">
          Mopnthly Produduct Sale
        </Text>
      </div>
    </div>
  );
}
