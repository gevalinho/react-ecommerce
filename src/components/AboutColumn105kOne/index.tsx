import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
}

export default function AboutColumn105kOne({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[80px] w-[80px]">
        <div className="h-[80px] w-[80px] relative">
          <Img
            src="images/img_group_1000005938.svg"
            alt="105k_one"
            className="justify-center h-[80px] w-[80px] left-0 bottom-0 right-0 top-0 m-auto absolute"
          />
          <Img
            src="images/img_icon_shop.svg"
            alt="105k_three"
            className="justify-center h-[40px] w-[40px] left-0 bottom-0 right-0 top-0 m-auto absolute"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[7px]">
        <Heading size="xl" as="h1" className="tracking-[1.28px] !font-inter">
          10.5k{" "}
        </Heading>
        <Text as="p" className="text-center">
          Sallers active our site
        </Text>
      </div>
    </div>
  );
}
