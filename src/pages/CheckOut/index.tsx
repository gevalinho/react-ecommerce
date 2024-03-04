import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Radio, Img, Text, CheckBox } from "../../components";
import AccountDropdownWithAccountHeader from "../../components/AccountDropdownWithAccountHeader";
import CartRoadmap from "../../components/CartRoadmap";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";

export default function CheckOutPage() {
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
                nothingOne="Product"
                nothingTwo="View Cart"
                nothingThree="CheckOut"
                className="flex flex-row justify-start gap-3"
              />
              <div className="flex flex-row justify-start mt-[74px]">
                <Text size="3xl" as="p" className="tracking-[1.44px] !font-inter">
                  Billing Details
                </Text>
              </div>
              <div className="flex flex-row justify-between items-start w-full mt-[37px]">
                <div className="flex flex-col items-center justify-start w-[41%] gap-[23px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[31px]">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text as="p" className="!text-black-900_7e opacity-0.4">
                        <span className="text-black-900_02">First Name</span>
                        <span className="text-red-600">*</span>
                      </Text>
                      <Input size="lg" name="firstName" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[5px]">
                      <Text as="p" className="!text-black-900_7e opacity-0.4">
                        Company Name
                      </Text>
                      <Input size="lg" name="name" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                      <Text as="p" className="!text-black-900_7e opacity-0.4">
                        <span className="text-black-900_02">Street Address</span>
                        <span className="text-red-600">*</span>
                      </Text>
                      <Input size="lg" name="streetaddress" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                      <Text as="p" className="!text-black-900_7e opacity-0.4">
                        Apartment, floor, etc. (optional)
                      </Text>
                      <Input size="lg" name="edittext" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                      <Text as="p" className="!text-black-900_7e opacity-0.4">
                        <span className="text-black-900_02">Town/City</span>
                        <span className="text-red-600">*</span>
                      </Text>
                      <div className="h-[50px] w-full bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                      <Text as="p" className="!text-black-900_7e opacity-0.4">
                        <span className="text-black-900_02">Phone Number</span>
                        <span className="text-red-600">*</span>
                      </Text>
                      <div className="h-[50px] w-full bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text as="p" className="!text-black-900_7e opacity-0.4">
                        <span className="text-black-900_02">Email Address</span>
                        <span className="text-red-600">*</span>
                      </Text>
                      <Input size="lg" name="email" className="w-full" />
                    </div>
                  </div>
                  <CheckBox
                    name="vector_two"
                    label="Save this information for faster check-out next time"
                    className="gap-4 text-left"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[46%] mt-8 gap-[31px]">
                  <div className="flex flex-col w-[81%] gap-8">
                    <div className="flex flex-row justify-start items-center w-full gap-6">
                      <Img
                        src="images/img_monitor_cart_small.png"
                        alt="lcd_monitor_one"
                        className="w-[54px] object-cover"
                      />
                      <div className="flex flex-row justify-between w-[82%]">
                        <Text as="p" className="mb-px">
                          LCD Monitor
                        </Text>
                        <Text as="p">$650</Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full ml-[3px] gap-5">
                      <Img
                        src="images/img_monitor_cart_small.png"
                        alt="monitorcart_one"
                        className="w-[54px] object-cover"
                      />
                      <div className="flex flex-row justify-between w-[83%]">
                        <Text as="p" className="mt-px">
                          H1 Gamepad
                        </Text>
                        <Text as="p">$1100</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%] gap-4">
                    <div className="flex flex-col items-center justify-start w-full gap-3.5">
                      <div className="flex flex-col items-center justify-start w-full gap-4">
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <div className="flex flex-row justify-between w-full">
                            <Text as="p" className="mb-px">
                              Subtotal:
                            </Text>
                            <Text as="p">$1750</Text>
                          </div>
                          <Img
                            src="images/img_underline_black_900_02_1x422.svg"
                            alt="underline_one"
                            className="h-px opacity-0.4"
                          />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Text as="p" className="mt-px">
                            Shipping:
                          </Text>
                          <Text as="p">Free</Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_underline_black_900_02_1x422.svg"
                        alt="underline_three"
                        className="h-px opacity-0.4"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <Text as="p" className="mb-px">
                        Total:
                      </Text>
                      <Text as="p">$1750</Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[82%]">
                    <Radio value="bank1" name="bank" label="Bank" className="pl-4 gap-4 py-px text-black-900_02" />
                    <div className="flex flex-row justify-start gap-2">
                      <Img src="images/img_monitor_cart_small.png" alt="bkash_one" className="w-[22%] object-cover" />
                      <Img src="images/img_monitor_cart_small.png" alt="visa_one" className="w-[22%] object-cover" />
                      <Img
                        src="images/img_monitor_cart_small.png"
                        alt="mastercard_one"
                        className="w-[22%] object-cover"
                      />
                      <Img src="images/img_monitor_cart_small.png" alt="nagad_one" className="w-[22%] object-cover" />
                    </div>
                  </div>
                  <Radio
                    value="cashondelivery"
                    name="cashon"
                    label="Cash on delivery"
                    className="pl-4 gap-4 py-px text-black-900_02"
                  />
                  <div className="flex flex-row justify-start gap-4">
                    <Input
                      color="black_900_02"
                      size="xl"
                      variant="outline"
                      name="coupon_code"
                      placeholder="Coupon Code"
                      className="w-[57%]"
                    />
                    <Button color="red_600" size="7xl" shape="round" className="font-medium min-w-[211px]">
                      Apply Coupon
                    </Button>
                  </div>
                  <Button color="red_600" size="7xl" shape="round" className="font-medium min-w-[190px]">
                    Place Order
                  </Button>
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
