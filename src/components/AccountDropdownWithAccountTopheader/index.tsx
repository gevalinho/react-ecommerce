import React from "react";
import { SelectBox, Img, Heading, Text } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
  offer?: string;
  shopnow?: string;
}

export default function AccountDropdownWithAccountTopheader({
  offer = "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
  shopnow = "ShopNow",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-between w-[61%] mr-[124px]">
        <div className="flex flex-row justify-start pt-[3px] gap-[9px]">
          <Text size="s" as="p" className="!text-gray-50">
            {offer}
          </Text>
          <Heading as="h1" className="!text-gray-50 text-center underline">
            {shopnow}
          </Heading>
        </div>
        <SelectBox
          indicator={<Img src="images/img_vector_white_a700_7x12.svg" alt="Vector" />}
          name="language"
          placeholder="English"
          options={dropDownOptions}
          className="w-[10%] gap-px text-gray-50"
        />
      </div>
    </div>
  );
}
