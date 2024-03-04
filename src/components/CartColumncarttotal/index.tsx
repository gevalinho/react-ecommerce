import React from "react";
import { Button, Text, Img } from "./..";

interface Props {
  className?: string;
  carttotal?: string;
  subtotalOne?: string;
  price?: string;
  shipping?: string;
  free?: string;
  total?: string;
  price1?: string;
  proceesTo?: string;
}

export default function CartColumncarttotal({
  carttotal = "Cart Total",
  subtotalOne = "Subtotal:",
  price = "$1750",
  shipping = "Shipping:",
  free = "Free",
  total = "Total:",
  price1 = "$1750",
  proceesTo = "Procees to checkout",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Text size="lg" as="p" className="mt-1.5">
        {carttotal}
      </Text>
      <div className="flex flex-col items-center justify-start w-full mt-[23px] gap-[15px] mx-auto max-w-[422px]">
        <div className="flex flex-row justify-between w-full">
          <Text as="p" className="mb-px">
            {subtotalOne}
          </Text>
          <Text as="p">{price}</Text>
        </div>
        <Img src="images/img_underline_black_900_02_1x422.svg" alt="underline_one" className="h-px opacity-0.4" />
      </div>
      <div className="flex flex-row justify-between w-full mt-4 mx-auto max-w-[422px]">
        <Text as="p" className="mt-px">
          {shipping}
        </Text>
        <Text as="p">{free}</Text>
      </div>
      <Img
        src="images/img_underline_black_900_02_1x422.svg"
        alt="underline_three"
        className="h-px w-full mt-3.5 mx-auto opacity-0.4 max-w-[422px]"
      />
      <div className="flex flex-row justify-between w-full mt-4 mx-auto max-w-[422px]">
        <Text as="p" className="mb-px">
          {total}
        </Text>
        <Text as="p">{price1}</Text>
      </div>
      <Button color="red_600" size="7xl" shape="round" className="mt-[15px] mb-2 ml-[65px] font-medium min-w-[260px]">
        {proceesTo}
      </Button>
    </div>
  );
}
