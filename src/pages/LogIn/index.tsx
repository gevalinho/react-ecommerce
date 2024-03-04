import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LogInPage() {
  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center w-full" />
        </div>
        <div className="flex flex-row justify-start w-full mt-[60px] mx-auto max-w-[1305px]">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-center pt-[75px] rounded-tr rounded-br bg-blue_gray-100">
              <Img src="images/img_dl_beatsnoop_1.png" alt="dlbeatsnoopone" className="w-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-start w-[29%] gap-10">
              <div className="flex flex-col items-start justify-start w-full gap-[46px]">
                <div className="flex flex-col items-start justify-start gap-[15px]">
                  <Text size="3xl" as="p" className="tracking-[1.44px] !font-inter">
                    Log in to Exclusive
                  </Text>
                  <Text as="p">Enter your details below</Text>
                </div>
                <div className="flex flex-col items-center justify-start gap-10">
                  <Input
                    size="xs"
                    shape="square"
                    name="phoneNumber"
                    placeholder="Email or Phone Number"
                    className="w-full text-black-900_7e"
                  />
                  <Input
                    color="black_900_02"
                    size="xs"
                    variant="underline"
                    shape="square"
                    name="password"
                    placeholder="Password"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-center">
                  <a
                    href="#"
                    className="flex justify-center items-center w-[143px] h-[56px] pt-[18px] pb-[13px] px-[35px] bg-red-600 rounded"
                  >
                    <Text as="p" className="!text-gray-50 !font-medium">
                      Log In
                    </Text>
                  </a>
                </div>
                <Text as="p" className="!text-red-600">
                  Forget Password?
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <Footer className="flex justify-center items-center w-full mt-[140px] py-[23px] bg-black-900_02" />
        </div>
      </div>
    </>
  );
}
