import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input, Heading } from "./..";

interface Props {
  className?: string;
  exclusive?: string;
  home?: string;
}

export default function AccountDropdownWithAccountHeader({ exclusive = "Exclusive", home, ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <div {...props}>
      <div className="flex flex-row justify-between items-center w-[56%]">
        <Heading size="lg" as="h1" className="tracking-[0.72px] !font-inter !font-bold">
          {exclusive}
        </Heading>
        <div className="flex flex-row justify-between w-auto gap-12">
          {!!home ? (
            <Text as="p" className="text-center">
              {home}
            </Text>
          ) : null}
          <Text as="p" className="text-center">
            Contact
          </Text>
          <Text as="p" className="text-center">
            About
          </Text>
          <a href="#">
            <Text as="p" className="text-center">
              Sign Up
            </Text>
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center w-[34%] gap-6">
        <Input
          size="sm"
          name="search"
          placeholder="What are you looking for?"
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          suffix={
            <div className="flex justify-center items-center w-[16px] h-[16px]">
              {searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} />
              ) : (
                <Img src="images/img_vector_black_900_02_16x16.svg" alt="Vector" className="cursor-pointer" />
              )}
            </div>
          }
          className="w-[62%] gap-[35px]"
        />
        <div className="flex flex-row justify-between w-[33%]">
          <div className="h-[32px] w-[32px] pb-1.5 pl-1.5 relative">
            <Img
              src="images/img_vector_black_900_02.svg"
              alt="vector_one"
              className="h-[18px] bottom-[21%] left-[19%] m-auto absolute"
            />
            <div className="h-[18px] w-[50%] right-0 top-0 m-auto absolute">
              <div className="justify-center h-[16px] w-[16px] left-0 bottom-0 right-0 top-0 m-auto bg-red-600 absolute rounded-[50%]" />
              <Text
                size="xs"
                as="p"
                className="w-max left-1/4 bottom-0 top-0 m-auto !text-gray-50 text-center !font-normal absolute"
              >
                4
              </Text>
            </div>
          </div>
          <div className="h-[32px] w-[32px] relative">
            <Button size="xs" shape="square" className="w-[24px] bottom-0 left-[3%] m-auto absolute">
              <Img src="images/img_cart1_black_900_02.svg" />
            </Button>
            <div className="h-[18px] w-[50%] right-[3%] top-[2%] m-auto absolute">
              <div className="h-[16px] w-[16px] bottom-[3%] right-0 left-0 m-auto bg-red-600 absolute rounded-[50%]" />
              <Text
                size="xs"
                as="p"
                className="w-max right-1/4 bottom-0 top-0 m-auto !text-gray-50 text-center !font-normal absolute"
              >
                2
              </Text>
            </div>
          </div>
          <Img src="images/img_user_black_900_02.svg" alt="user_one" className="h-[32px] w-[32px]" />
        </div>
      </div>
    </div>
  );
}
