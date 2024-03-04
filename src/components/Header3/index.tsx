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

export default function Header3({ ...props }: Props) {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

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
      <div className="flex flex-row justify-between items-center w-full mt-10 mx-auto max-w-[1170px]">
        <div className="flex flex-row justify-between items-center w-[56%]">
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
              <a href="#" className="cursor-pointer hover:text-black-900_02 hover:font-normal">
                <Text />
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
        <div className="flex flex-row justify-start items-center w-[34%] gap-6">
          <Input
            size="sm"
            name="search"
            placeholder="What are you looking for?"
            value={searchBarValue3}
            onChange={(e: string) => setSearchBarValue3(e)}
            suffix={
              <div className="flex justify-center items-center w-[16px] h-[16px]">
                {searchBarValue3?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue3("")} height={16} width={16} />
                ) : (
                  <Img src="images/img_vector_black_900_02_16x16.svg" alt="Vector" className="cursor-pointer" />
                )}
              </div>
            }
            className="w-[62%] gap-[35px]"
          />
          <div className="flex flex-row justify-between w-[33%]">
            <Img src="images/img_wishlist.svg" alt="wishlist_one" className="h-[32px] w-[32px]" />
            <Img src="images/img_cart1.svg" alt="cartone_one" className="h-[32px] w-[32px]" />
            <Img src="images/img_user_black_900_02.svg" alt="user_one" className="h-[32px] w-[32px]" />
          </div>
        </div>
      </div>
      <Img src="images/img_line_3.svg" alt="linethree_one" className="h-px mt-4" />
    </header>
  );
}
