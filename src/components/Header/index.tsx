import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input, Text, Heading, SelectBox } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-end w-full p-3 bg-black-900_02">
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
      </div>
      <div className="flex flex-row justify-between items-center w-full mt-[38px] mx-auto max-w-[1170px]">
        <div className="flex flex-row justify-between items-center w-[62%]">
          <Heading size="lg" as="h4" className="tracking-[0.72px] !font-inter !font-bold">
            Exclusive
          </Heading>
          <ul className="flex flex-row justify-between w-auto gap-12">
            <li>
              <a href="#">
                <Text as="p" className="text-center">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="text-center">
                  Contact
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="text-center">
                  About
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="text-center">
                  Sign Up
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <Input
          size="sm"
          name="search"
          placeholder="What are you looking for?"
          value={searchBarValue1}
          onChange={(e: string) => setSearchBarValue1(e)}
          suffix={
            <div className="flex justify-center items-center w-[16px] h-[16px]">
              {searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={16} width={16} />
              ) : (
                <Img src="images/img_vector_black_900_02_16x16.svg" alt="Vector" className="cursor-pointer" />
              )}
            </div>
          }
          className="w-[21%] gap-[35px]"
        />
      </div>
      <Img src="images/img_line_3.svg" alt="linethree_one" className="h-px mt-4" />
    </header>
  );
}
