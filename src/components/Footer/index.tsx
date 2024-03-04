import React from "react";
import { Text, Img, Input, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-full mt-[52px] gap-[60px]">
        <div className="flex flex-row justify-between items-start w-full max-w-[1170px]">
          <div className="flex flex-col items-start justify-start w-[19%] gap-3.5">
            <div className="flex flex-col items-start justify-start w-[95%] gap-[25px]">
              <div className="flex flex-col items-start justify-start gap-[19px]">
                <Heading size="lg" as="h4" className="!text-gray-50 tracking-[0.72px] !font-inter !font-bold">
                  Exclusive
                </Heading>
                <Text size="lg" as="p" className="!text-gray-50">
                  Subscribe
                </Text>
              </div>
              <Text as="p" className="!text-gray-50">
                Get 10% off your first order
              </Text>
            </div>
            <Input
              color="gray_50"
              variant="outline"
              name="email"
              placeholder="Enter your email"
              suffix={
                <div className="flex justify-center items-center w-[20px] h-[17px]">
                  <Img src="images/img_vector_gray_50_18x20.svg" alt="Vector" />
                </div>
              }
              className="w-full gap-[34px]"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[15%] mt-[3px] gap-5">
            <a href="#">
              <Text size="lg" as="p" className="!text-gray-50">
                Support
              </Text>
            </a>
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <Text as="p" className="!text-gray-50">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </Text>
              <Text as="p" className="!text-gray-50">
                exclusive@gmail.com
              </Text>
              <Text as="p" className="!text-gray-50">
                +88015-88888-9999
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[11%] mt-0.5">
            <div className="flex flex-col items-start justify-start w-full pb-0.5 gap-[22px]">
              <a href="#">
                <Text size="lg" as="p" className="!text-gray-50">
                  Account
                </Text>
              </a>
              <ul className="flex flex-col items-start justify-start w-full pt-0.5 gap-[15px]">
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      My Account
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      Login / Register
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      Cart
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      Wishlist
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      Shop
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[10%] mt-0.5">
            <div className="flex flex-col items-start justify-start w-full gap-[22px]">
              <a href="#">
                <Text size="lg" as="p" className="!text-gray-50">
                  Quick Link
                </Text>
              </a>
              <ul className="flex flex-col items-start justify-start w-full gap-[15px]">
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      Privacy Policy
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      Terms Of Use
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      FAQ
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-50">
                      Contact
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[17%] mt-[3px] gap-6">
            <div className="flex flex-col items-start justify-start w-full gap-5">
              <a href="#">
                <Text size="lg" as="p" className="!text-gray-50">
                  Download App
                </Text>
              </a>
              <div className="flex flex-col items-center justify-start w-full gap-[7px]">
                <Text size="xs" as="p" className="!text-gray-50_99 opacity-0.7">
                  Save $3 with App New User Only
                </Text>
                <div className="flex flex-row justify-start items-center w-full gap-2">
                  <div className="flex flex-col items-center justify-start h-[80px] w-[80px] bg-black-900_02">
                    <Img src="images/img_qrcode_1.png" alt="qrcodeone_one" className="w-[76px] object-cover" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[56%] gap-1">
                    <div className="h-[40px] w-full p-[3px] bg-black-900_01 relative">
                      <Img
                        src="images/img_png_transparent.png"
                        alt="pngtransparent"
                        className="justify-center h-[30px] w-[95%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded"
                      />
                      <div className="flex flex-row justify-end items-center w-[5%] bottom-[38%] right-[9%] m-auto absolute">
                        <Img src="images/img_vector_3.svg" alt="vectorthree_one" className="h-px w-px" />
                        <Img src="images/img_vector_2.svg" alt="vectortwo_one" className="h-[3px] ml-0.5" />
                        <Img
                          src="images/img_vector_4.svg"
                          alt="vectorfour_one"
                          className="h-[2px] w-px ml-[-1px] z-[1]"
                        />
                        <Img src="images/img_vector_1.svg" alt="vectorone_one" className="h-px w-px" />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full p-[3px] bg-black-900_02">
                      <Img
                        src="images/img_download_appstore.png"
                        alt="download_one"
                        className="w-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-[85%]">
              <div className="flex flex-col items-center justify-start h-[24px] w-[24px] p-[3px]">
                <Img src="images/img_vector_white_a700_18x10.svg" alt="vector_one" className="h-[18px]" />
              </div>
              <div className="flex flex-col items-center justify-center h-[24px] w-[24px]">
                <Img
                  src="images/img_vector_white_a700_16x20.svg"
                  alt="vector_three"
                  className="h-[16px] mt-0.5 mb-px"
                />
              </div>
              <div className="h-[24px] w-[24px] p-[3px] relative">
                <Img
                  src="images/img_vector_white_a700_18x18.svg"
                  alt="vector_five"
                  className="justify-center h-[18px] w-[18px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Img
                  src="images/img_vector_white_a700_8x8.svg"
                  alt="vector_seven"
                  className="justify-center h-[8px] w-[8px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Img
                  src="images/img_vector_white_a700_2x2.svg"
                  alt="vector_nine"
                  className="h-[2px] w-[2px] right-[23%] top-[23%] m-auto absolute"
                />
              </div>
              <div className="flex flex-col items-center justify-start h-[24px] w-[24px] p-[3px]">
                <Img src="images/img_vector_white_a700_17x17.svg" alt="vector_eleven" className="h-[17px] w-[17px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-4">
          <Img src="images/img_underline_white_a700.svg" alt="underline_one" className="h-px opacity-0.5" />
          <div className="flex flex-row justify-center w-[24%]">
            <div className="flex flex-row justify-start items-center w-full gap-1.5">
              <div className="h-[20px] w-[20px] relative">
                <Img
                  src="images/img_vector_white_a700_16x16.svg"
                  alt="vector_thirteen"
                  className="justify-center h-[16px] w-[16px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Img
                  src="images/img_vector_white_a700_6x5.svg"
                  alt="vector_fifteen"
                  className="justify-center h-[6px] w-[5px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
              </div>
              <Text as="p" className="!text-white-A700">
                Copyright Rimel 2022. All right reserved
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
