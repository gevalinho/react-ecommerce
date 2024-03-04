import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text } from "../../components";
import CartRoadmap from "../../components/CartRoadmap";
import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <Header3 className="flex flex-col items-center justify-center w-full" />
        </div>
        <div className="flex flex-col items-end justify-start w-full mt-[79px] mx-auto max-w-[1000px]">
          <CartRoadmap
            account="Home"
            nothing="404 Error"
            className="flex flex-row justify-between w-[14%] mr-[866px]"
          />
          <div className="flex flex-col items-center justify-start w-[83%] mt-[131px] gap-[31px]">
            <Text size="4xl" as="p" className="tracking-[3.30px] !font-inter">
              404 Not Found
            </Text>
            <Text as="p">Your visited page not found. You may go home page.</Text>
          </div>
          <Button color="red_600" size="7xl" shape="round" className="mt-[77px] mr-[309px] font-medium min-w-[254px]">
            Back to home page
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <Footer className="flex justify-center items-center w-full mt-[140px] py-[23px] bg-black-900_02" />
        </div>
      </div>
    </>
  );
}
