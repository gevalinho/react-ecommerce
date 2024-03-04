import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button, RatingBar } from "../../components";
import AccountDropdownWithAccountHeader from "../../components/AccountDropdownWithAccountHeader";
import CartRoadmap from "../../components/CartRoadmap";
import ECommerceHomePageCart2 from "../../components/ECommerceHomePageCart2";
import ECommerceHomePageCartwithflat1 from "../../components/ECommerceHomePageCartwithflat1";
import ECommerceHomePageCartwithflat2 from "../../components/ECommerceHomePageCartwithflat2";
import ECommerceHomePageCartwithflat3 from "../../components/ECommerceHomePageCartwithflat3";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";

export default function ProductDetailspagePage() {
  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header2 className="flex justify-center items-center w-full p-3 bg-black-900_02" />
        <div className="flex flex-row justify-center w-full mt-10">
          <div className="flex flex-col items-center justify-start w-full gap-[79px]">
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <AccountDropdownWithAccountHeader
                home="Home"
                className="flex flex-row justify-between w-full max-w-[1170px]"
              />
              <Img src="images/img_line_3.svg" alt="linethree_one" className="h-px" />
            </div>
            <div className="flex flex-col items-start justify-start w-full max-w-[1170px]">
              <CartRoadmap
                nothing="Gaming"
                nothingThree="Havic HV G-92 Gamepad"
                className="flex flex-row justify-start gap-3"
              />
              <div className="flex flex-row justify-between w-full mt-[78px]">
                <div className="flex flex-row justify-start w-[60%] gap-[30px]">
                  <div className="flex flex-col w-[25%] gap-4">
                    <div className="flex flex-row justify-center w-full p-3 bg-gray-100 rounded">
                      <Img src="images/img_image_57.png" alt="imagefiftyseven" className="w-[83%] object-cover" />
                    </div>
                    <div className="flex flex-row justify-center w-full p-5 bg-gray-100 rounded">
                      <Img src="images/img_image_58.png" alt="imagefiftyeight" className="w-[87%] object-cover" />
                    </div>
                    <div className="flex flex-row justify-center w-full p-[18px] bg-gray-100 rounded">
                      <Img src="images/img_image_61.png" alt="imagesixtyone" className="w-full my-1 object-cover" />
                    </div>
                    <div className="flex flex-row justify-center w-full p-4 bg-gray-100 rounded">
                      <Img src="images/img_image_59.png" alt="imagefiftynine" className="w-[89%] object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[72%] p-[27px] bg-gray-100 rounded">
                    <Img
                      src="images/img_image_63.png"
                      alt="imagesixtythree"
                      className="w-full mt-[127px] mb-[104px] object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[35%]">
                  <Heading size="lg" as="h1" className="tracking-[0.72px] !font-inter">
                    Havic HV G-92 Gamepad
                  </Heading>
                  <div className="flex flex-row justify-start w-[73%] mt-[9px] gap-4">
                    <div className="flex flex-row justify-start items-center w-[70%] gap-2">
                      <RatingBar
                        value={4}
                        isEditable={true}
                        color="#00000071"
                        activeColor="#ffad33"
                        size={20}
                        className="flex justify-between w-[100px] rounded-[1px]"
                      />
                      <Text size="s" as="p" className="!text-black-900_87 opacity-0.5">
                        (150 Reviews)
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[25%] gap-[15px]">
                      <div className="h-[16px] w-px opacity-0.5 bg-black-900_87" />
                      <Text size="s" as="p" className="!text-green-A400_90 opacity-0.6">
                        In Stock
                      </Text>
                    </div>
                  </div>
                  <Text size="xl" as="p" className="mt-[13px] tracking-[0.72px] !font-inter">
                    $192.00
                  </Text>
                  <Text size="s" as="p" className="w-[94%] mt-5">
                    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free
                    install & mess free removal Pressure sensitive.
                  </Text>
                  <Img
                    src="images/img_underline_black_900_02.svg"
                    alt="underline_one"
                    className="h-px mt-6 opacity-0.5"
                  />
                  <div className="flex flex-col items-start justify-start w-[74%] mt-[21px] gap-[21px]">
                    <div className="flex flex-row justify-start items-center gap-6">
                      <Text size="lg" as="p" className="tracking-[0.60px] !font-inter !font-normal">
                        Colours:
                      </Text>
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#00000071"
                        activeColor="#ffad33"
                        size={20}
                        starCount={2}
                        className="flex justify-between w-[48px] rounded-[1px]"
                      />
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-6">
                      <Text size="lg" as="p" className="tracking-[0.60px] !font-inter !font-normal">
                        Size:
                      </Text>
                      <div className="flex flex-row justify-between w-[76%]">
                        <Button
                          color="black_900_7f"
                          size="md"
                          variant="outline"
                          shape="round"
                          className="font-medium min-w-[32px]"
                        >
                          XS
                        </Button>
                        <Button
                          color="black_900_7f"
                          size="md"
                          variant="outline"
                          shape="round"
                          className="font-medium min-w-[32px]"
                        >
                          S
                        </Button>
                        <Button color="red_600" size="md" shape="round" className="font-medium min-w-[32px]">
                          M
                        </Button>
                        <Button
                          color="black_900_7f"
                          size="md"
                          variant="outline"
                          shape="round"
                          className="font-medium min-w-[32px]"
                        >
                          L
                        </Button>
                        <Button
                          color="black_900_7f"
                          size="md"
                          variant="outline"
                          shape="round"
                          className="font-medium min-w-[32px]"
                        >
                          XL
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mt-6 gap-4">
                    <div className="flex flex-row justify-start w-[40%]">
                      <div className="flex flex-col items-center justify-center w-[26%] p-2 rounded-tl rounded-bl border-black-900_7f border border-solid">
                        <Button size="xs" shape="square" className="w-[24px] my-0.5">
                          <Img src="images/img_icon_minus.svg" />
                        </Button>
                      </div>
                      <Button
                        color="black_900_7f"
                        size="5xl"
                        variant="outline"
                        shape="square"
                        className="ml-[-1px] font-medium border-t border-b min-w-[80px]"
                      >
                        2
                      </Button>
                      <div className="flex flex-col items-center justify-center w-[26%] ml-[-1px] p-2 rounded-tr rounded-br bg-red-600">
                        <Button size="xs" shape="square" className="w-[24px] my-0.5">
                          <Img src="images/img_icon_cancel_white_a700.svg" />
                        </Button>
                      </div>
                    </div>
                    <Button color="red_600" size="4xl" shape="round" className="font-medium min-w-[165px]">
                      Buy Now
                    </Button>
                    <Button color="black_900_7f" size="xl" variant="outline" shape="round" className="w-[40px]">
                      <Img src="images/img_wishlist.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mt-10 gap-4 py-6 border-black-900_7f border border-solid rounded">
                    <div className="flex flex-row justify-start items-center w-[84%] ml-4 gap-4">
                      <Img
                        src="images/img_icon_delivery_black_900_02.svg"
                        alt="icondelivery"
                        className="h-[40px] w-[40px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[84%] gap-[7px]">
                        <Text as="p" className="!font-medium">
                          Free Delivery
                        </Text>
                        <Text size="xs" as="p" className="underline">
                          Enter your postal code for Delivery Availability
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_underline_black_900_02_1x422.svg"
                      alt="underline_three"
                      className="h-px opacity-0.5"
                    />
                    <div className="flex flex-row justify-start items-center w-[71%] ml-4 gap-4">
                      <Img src="images/img_icon_return.svg" alt="iconreturn_one" className="h-[40px] w-[40px]" />
                      <div className="flex flex-col items-start justify-start w-[81%] gap-[7px]">
                        <Text as="p" className="!font-medium">
                          Return Delivery
                        </Text>
                        <Text size="xs" as="p">
                          <span className="text-black-900_02">Free 30 Days Delivery Returns. </span>
                          <a href="#" className="text-black-900_02 underline">
                            Details
                          </a>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[12%] mt-[140px] gap-4">
                <div className="h-[40px] w-[15%] bg-red-600 rounded" />
                <Heading size="s" as="h2" className="!text-red-600">
                  Related Item
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-full mt-[60px]">
                <div className="flex flex-row w-full gap-[30px]">
                  <ECommerceHomePageCartwithflat3 className="flex flex-col items-start justify-start gap-4" />
                  <ECommerceHomePageCartwithflat2 className="flex flex-col items-start justify-start gap-4" />
                  <ECommerceHomePageCartwithflat1 className="flex flex-col items-start justify-start gap-4" />
                  <ECommerceHomePageCart2 className="flex flex-col items-start justify-start gap-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[140px] py-[23px] bg-black-900_02" />
      </div>
    </>
  );
}
