import React from "react";
import { Heading, RatingBar, Text, Button, Img } from "./..";

interface Props {
  className?: string;
  addToCart?: string;
  canoneosdslr?: string;
  price?: string;
  ninetyfive?: string;
}

export default function ECommerceHomePageCart5({
  addToCart = "Add To Cart",
  canoneosdslr = "CANON EOS DSLR Camera",
  price = "$360",
  ninetyfive = "(95)",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full pt-3 bg-gray-100 rounded">
        <div className="flex flex-col items-end justify-start w-full gap-[23px]">
          <div className="flex flex-row justify-start items-start w-full gap-5 mx-auto max-w-[200px]">
            <div className="flex flex-col items-center justify-start w-[73%] mt-[11px]">
              <Img src="images/img_eos_250d_03_500x500.png" alt="eos250dthree" className="w-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-start w-[17%] gap-2">
              <Button className="w-[34px]">
                <Img src="images/img_wishlist.svg" />
              </Button>
              <Button className="w-[34px]">
                <Img src="images/img_quick_view.svg" />
              </Button>
            </div>
          </div>
          <Button color="black_900_02" size="3xl" className="w-full rounded-bl rounded-br font-medium">
            {addToCart}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[7px] mx-auto max-w-[208px]">
        <Text as="p" className="!font-medium">
          {canoneosdslr}
        </Text>
        <div className="flex flex-row justify-start items-center w-[91%] gap-2">
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
              {ninetyfive}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
