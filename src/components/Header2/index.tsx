import React from "react";
import { SelectBox, Img, Heading, Text } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function Header2({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between w-[61%] mr-[124px]">
        <div className="flex flex-row justify-start pt-[3px] gap-[9px]">
          <Text size="s" as="p" className="!text-gray-50">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </Text>
          <Heading as="p" className="!text-gray-50 text-center underline">
            ShopNow
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
    </header>
  );
}
