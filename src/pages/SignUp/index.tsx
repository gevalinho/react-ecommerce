import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function SignUpPage() {
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
            <div className="flex flex-col items-start justify-start w-[29%] gap-[46px]">
              <div className="flex flex-col items-start justify-start gap-[19px]">
                <a href="#">
                  <Text size="3xl" as="p" className="tracking-[1.44px] !font-inter">
                    Create an account
                  </Text>
                </a>
                <Text as="p">Enter your details below</Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-10">
                <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                  <Input size="xs" shape="square" name="name" placeholder="Name" className="w-full text-black-900_7e" />
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Text as="p" className="!text-black-900_7e opacity-0.4">
                      Email or Phone Number
                    </Text>
                    <Img src="images/img_underline_black_900_02.svg" alt="underline_one" className="h-px opacity-0.5" />
                  </div>
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
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <a
                    href="#"
                    className="flex justify-center items-center w-[371px] h-[56px] px-[35px] py-4 bg-red-600 rounded"
                  >
                    <Text as="p" className="!text-gray-50 !font-medium">
                      Create Account
                    </Text>
                  </a>
                  <div className="flex flex-col items-center justify-start w-full gap-8">
                    <Button
                      color="black_900_66"
                      size="7xl"
                      variant="outline"
                      shape="round"
                      leftIcon={<Img src="images/img_icongoogle.svg" alt="Icon-Google" />}
                      className="w-full gap-4"
                    >
                      Sign up with Google
                    </Button>
                    <div className="flex flex-row justify-start items-center w-[67%] gap-4">
                      <Text as="p" className="!text-black-900_99 opacity-0.7">
                        Already have account?
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[19%] pt-0.5 gap-px">
                        <a href="#" className="opacity-0.7">
                          <Text as="p" className="!text-black-900_99 !font-medium">
                            Log in
                          </Text>
                        </a>
                        <Img
                          src="images/img_underline_black_900_02.svg"
                          alt="underline_three"
                          className="h-px opacity-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
