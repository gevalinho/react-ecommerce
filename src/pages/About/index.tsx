import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Slider, Heading } from "../../components";
import AboutColumn105kOne from "../../components/AboutColumn105kOne";
import AboutColumniconsale from "../../components/AboutColumniconsale";
import AboutColumniconshopp from "../../components/AboutColumniconshopp";
import CartRoadmap from "../../components/CartRoadmap";
import ECommerceHomePageListicondeliver from "../../components/ECommerceHomePageListicondeliver";
import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function AboutPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <Header3 className="flex flex-col items-center justify-center w-full" />
        </div>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-center justify-start w-[91%] mt-[79px]">
            <div className="flex flex-col items-start justify-start w-full">
              <CartRoadmap account="Home" nothing="About" className="flex flex-row justify-between w-[9%]" />
              <div className="flex flex-row justify-between items-center w-full mt-[42px]">
                <div className="flex flex-col items-start justify-start w-[41%] pt-1 gap-[33px]">
                  <Heading size="4xl" as="h1" className="tracking-[3.24px] !font-inter text-justify">
                    Our Story
                  </Heading>
                  <div className="flex flex-col items-center justify-start gap-6">
                    <Text as="p" className="!leading-[26px]">
                      Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                      presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                      Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.{" "}
                    </Text>
                    <Text as="p" className="w-[97%] !leading-[26px]">
                      Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                      diverse assotment in categories ranging from consumer.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center rounded-tl rounded-bl bg-pink-A100">
                  <Img
                    src="images/img_portrait_two_af.png"
                    alt="portraittwoaf"
                    className="w-full rounded-bl rounded-tl object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full mt-[140px] gap-[30px] mx-auto max-w-[1170px]">
                <div className="flex flex-row justify-center w-[24%] p-[30px] border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-sm">
                  <AboutColumn105kOne className="flex flex-col items-center justify-start h-[170px] w-[169px] gap-[19px]" />
                </div>
                <div className="flex flex-row justify-center w-[24%] p-[29px] border-black-900_4c border border-solid bg-red-600 shadow-sm cursor-pointer rounded hover:shadow-sm">
                  <AboutColumniconsale className="flex flex-col items-center justify-start w-[95%] mt-0.5 gap-[19px]" />
                </div>
                <div className="flex flex-row justify-center w-[24%] p-1 border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-sm">
                  <AboutColumniconshopp className="flex flex-col items-center justify-start w-full gap-5 my-[26px]" />
                </div>
                <div className="flex flex-row justify-center w-[24%] p-[27px] border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-sm">
                  <AboutColumniconsale
                    image="images/img_group_1000005938.svg"
                    iconsaleOne="images/img_icon_moneybag.svg"
                    className="flex flex-col items-center justify-start w-[99%] mt-0.5 gap-[19px]"
                  />
                </div>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
                renderDotsItem={(props: DotsItem) => {
                  return props?.isActive ? (
                    <div className="h-[16px] w-[16px] mr-3 bg-black-900_02" />
                  ) : (
                    <div className="h-[12px] w-[12px] mr-3 bg-black-900_75" />
                  );
                }}
                activeIndex={sliderState}
                onSlideChanged={(e: EventObject) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-full mt-[140px] mx-auto max-w-[1170px]"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-start justify-start gap-[27px] mx-2.5">
                      <div className="flex flex-col items-center justify-start pt-[39px] px-[39px] bg-gray-100 rounded">
                        <Img src="images/img_image_46.png" alt="imagefortysix" className="w-[81%] object-cover" />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[50%] gap-[15px]">
                        <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                          <Text size="2xl" as="p" className="tracking-[1.28px] !font-inter">
                            Tom Cruise
                          </Text>
                          <Text as="p">Founder & Chairman</Text>
                        </div>
                        <div className="flex flex-row justify-between w-[57%]">
                          <Button size="xs" shape="square" className="w-[24px]">
                            <Img src="images/img_icon_twitter.svg" />
                          </Button>
                          <Button size="xs" shape="square" className="w-[24px]">
                            <Img src="images/img_icon_instagram.svg" />
                          </Button>
                          <Button size="xs" shape="square" className="w-[24px]">
                            <Img src="images/img_icon_linkedin.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
              <ECommerceHomePageListicondeliver className="flex flex-row w-full mt-[140px] gap-[88px] mx-auto max-w-[943px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <Footer className="flex justify-center items-center w-full mt-[139px] py-[23px] bg-black-900_02" />
        </div>
      </div>
    </>
  );
}
