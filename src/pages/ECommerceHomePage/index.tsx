import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, RatingBar, Slider } from "../../components";
import ECommerceHomePageCart from "../../components/ECommerceHomePageCart";
import ECommerceHomePageCart1 from "../../components/ECommerceHomePageCart1";
import ECommerceHomePageCart10 from "../../components/ECommerceHomePageCart10";
import ECommerceHomePageCart2 from "../../components/ECommerceHomePageCart2";
import ECommerceHomePageCart3 from "../../components/ECommerceHomePageCart3";
import ECommerceHomePageCart4 from "../../components/ECommerceHomePageCart4";
import ECommerceHomePageCart5 from "../../components/ECommerceHomePageCart5";
import ECommerceHomePageCart6 from "../../components/ECommerceHomePageCart6";
import ECommerceHomePageCart7 from "../../components/ECommerceHomePageCart7";
import ECommerceHomePageCart8 from "../../components/ECommerceHomePageCart8";
import ECommerceHomePageCart9 from "../../components/ECommerceHomePageCart9";
import ECommerceHomePageCartwithflat from "../../components/ECommerceHomePageCartwithflat";
import ECommerceHomePageCartwithflat1 from "../../components/ECommerceHomePageCartwithflat1";
import ECommerceHomePageCartwithflat2 from "../../components/ECommerceHomePageCartwithflat2";
import ECommerceHomePageCartwithflat3 from "../../components/ECommerceHomePageCartwithflat3";
import ECommerceHomePageListicondeliver from "../../components/ECommerceHomePageListicondeliver";
import ECommerceHomePageRowdays from "../../components/ECommerceHomePageRowdays";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function ECommerceHomePagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="flex flex-col items-center justify-center w-full" />
        </div>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-center justify-start w-[91%]">
            <div className="flex flex-col items-start justify-start w-full overflow-auto">
              <div className="flex flex-row justify-start items-end w-full mx-auto max-w-[1170px]">
                <div className="flex flex-col items-start justify-start w-[19%] gap-4">
                  <div className="flex flex-row justify-between w-full">
                    <Text as="p" className="mb-px text-center">
                      Woman’s Fashion
                    </Text>
                    <Button size="xs" shape="square" className="w-[24px] rotate-[90deg]">
                      <Img src="images/img_dropdown.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <Text as="p" className="mb-px text-center">
                      Men’s Fashion
                    </Text>
                    <Button size="xs" shape="square" className="w-[24px] rotate-[90deg]">
                      <Img src="images/img_dropdown.svg" />
                    </Button>
                  </div>
                  <Text as="p" className="text-center">
                    Electronics
                  </Text>
                  <Text as="p" className="text-center">
                    Home & Lifestyle
                  </Text>
                  <Text as="p" className="text-center">
                    Medicine
                  </Text>
                  <Text as="p" className="text-center">
                    Sports & Outdoor
                  </Text>
                  <Text as="p" className="text-center">
                    Baby’s & Toys
                  </Text>
                  <Text as="p" className="text-center">
                    Groceries & Pets
                  </Text>
                  <Text as="p" className="text-center">
                    Health & Beauty
                  </Text>
                </div>
                <div className="h-[384px] w-px mb-0.5 ml-4 opacity-0.3 bg-black-900_75" />
                <div className="h-[344px] w-[77%] mb-0.5 ml-11 relative">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                    renderDotsItem={(props: DotsItem) => {
                      return props?.isActive ? (
                        <div className="h-[14px] w-[14px] mr-3 bg-white-A700" />
                      ) : (
                        <div className="h-[12px] w-[12px] mr-3 bg-white_A700_87" />
                      );
                    }}
                    activeIndex={sliderState1}
                    onSlideChanged={(e: EventObject) => {
                      setSliderState1(e?.item);
                    }}
                    ref={sliderRef1}
                    className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex flex-row justify-end pt-4 mx-auto bg-black-900_02">
                          <div className="flex flex-row justify-start items-center w-[93%] gap-[38px]">
                            <div className="flex flex-col items-start justify-start w-[36%] gap-[21px]">
                              <div className="flex flex-row justify-start items-center gap-6">
                                <Img
                                  src="images/img_1200px_apple_gray_logo.png"
                                  alt="1200pxapple_one"
                                  className="w-[22%] object-cover"
                                />
                                <Text as="p" className="!text-gray-50 text-center">
                                  iPhone 14 Series
                                </Text>
                              </div>
                              <Heading size="3xl" as="h1" className="!text-gray-50 tracking-[1.92px] !font-inter">
                                Up to 10% off Voucher
                              </Heading>
                              <div className="flex flex-row justify-start items-center w-[39%] ml-[3px] gap-2">
                                <div className="flex flex-col items-center justify-start w-[72%] pt-0.5 gap-px">
                                  <Text as="p" className="!text-gray-50 text-center !font-medium">
                                    Shop Now
                                  </Text>
                                  <div className="h-px w-full bg-gray-50" />
                                </div>
                                <Button size="xs" shape="square" className="w-[24px]">
                                  <Img src="images/img_vector_gray_50.svg" />
                                </Button>
                              </div>
                            </div>
                            <Img src="images/img_hero_endframe.png" alt="image" className="w-[60%] object-cover" />
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-[137px] mx-auto max-w-[1170px]">
                <div className="flex flex-row justify-between items-center w-[52%]">
                  <div className="flex flex-col items-start justify-start w-[36%] gap-[25px]">
                    <div className="flex flex-row justify-start items-center w-[48%] gap-4">
                      <div className="h-[40px] w-[20%] bg-red-600 rounded" />
                      <Heading size="s" as="h2" className="!text-red-600">
                        Today’s
                      </Heading>
                    </div>
                    <Heading size="2xl" as="h3" className="tracking-[1.44px] !font-inter">
                      Flash Sales
                    </Heading>
                  </div>
                  <ECommerceHomePageRowdays className="flex flex-row justify-between w-auto" />
                </div>
                <Button size="6xl" shape="square" className="w-[9%]">
                  <Img src="images/img_arrow_left.svg" />
                </Button>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 6 } }}
                paddingLeft={270}
                paddingRight={105}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e: EventObject) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-full mt-[33px]"
                items={[...Array(24)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-row justify-center items-start p-3 mx-2.5 bg-gray-100 rounded">
                      <Button color="red_600" size="sm" shape="round" className="min-w-[55px]">
                        -25%
                      </Button>
                      <div className="flex flex-col items-center justify-start w-[44%] ml-3.5 my-[23px]">
                        <Img src="images/img_sam_moghadam_kh.png" alt="sammoghadamkh" className="w-full object-cover" />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[14%] ml-9 gap-2">
                        <Button className="w-[34px]">
                          <Img src="images/img_wishlist.svg" />
                        </Button>
                        <Button className="w-[34px]">
                          <Img src="images/img_quick_view.svg" />
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
              <Button
                color="red_600"
                size="7xl"
                shape="round"
                className="mt-[59px] ml-[468px] font-medium min-w-[234px]"
              >
                View All Products
              </Button>
              <div className="h-px w-full mt-[60px] mx-auto opacity-0.3 rotate-[-180deg] bg-black-900_75 max-w-[1170px]" />
              <div className="flex flex-col items-center justify-start w-full mt-[79px] gap-[70px] mx-auto max-w-[1170px]">
                <div className="flex flex-col items-center justify-start w-full gap-[58px]">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col items-start justify-start w-[33%] gap-[25px]">
                      <div className="flex flex-row justify-start items-center w-[34%] gap-4">
                        <div className="h-[40px] w-[16%] bg-red-600 rounded" />
                        <Heading size="s" as="h6" className="!text-red-600">
                          Categories
                        </Heading>
                      </div>
                      <Heading size="2xl" as="h1" className="tracking-[1.44px] !font-inter">
                        Browse By Category
                      </Heading>
                    </div>
                    <Button size="6xl" shape="square" className="w-[9%]">
                      <Img src="images/img_arrow_left.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-row w-full gap-[30px]">
                    <div className="flex flex-col items-center justify-center w-[15%] gap-4 p-[23px] border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-xs">
                      <Img src="images/img_category_cellphone.svg" alt="phones_one" className="h-[56px] w-[56px]" />
                      <Text as="p">Phones</Text>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] gap-[18px] p-[21px] border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-xs">
                      <Img
                        src="images/img_category_computer.svg"
                        alt="category_one"
                        className="h-[56px] w-[56px] mt-[3px]"
                      />
                      <Text as="p">Computers</Text>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] gap-4 p-[23px] border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-xs">
                      <Img src="images/img_category_smartwatch.svg" alt="category_one" className="h-[56px] w-[56px]" />
                      <Text as="p">SmartWatch</Text>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] gap-4 p-[23px] border-black-900_4c border border-solid bg-red-600 shadow-xs cursor-pointer rounded hover:shadow-xs">
                      <Img src="images/img_category_camera.svg" alt="categorycamera" className="h-[56px] w-[56px]" />
                      <Text as="p" className="!text-gray-50">
                        Camera
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] gap-4 p-[23px] border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-xs">
                      <Img src="images/img_category_headphone.svg" alt="category_one" className="h-[56px] w-[56px]" />
                      <Text as="p">HeadPhones</Text>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] gap-[18px] p-[21px] border-black-900_4c border border-solid cursor-pointer rounded hover:shadow-xs">
                      <Img
                        src="images/img_category_gamepad.svg"
                        alt="category_one"
                        className="h-[56px] w-[56px] mt-[3px]"
                      />
                      <Text as="p">Gaming</Text>
                    </div>
                  </div>
                </div>
                <div className="h-px w-full opacity-0.3 rotate-[-180deg] bg-black-900_75" />
              </div>
              <div className="flex flex-col items-center justify-start w-full mt-[69px] gap-[58px] mx-auto max-w-[1170px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start w-[35%] gap-[25px]">
                    <div className="flex flex-row justify-start items-center w-[32%] gap-4">
                      <div className="h-[40px] w-[16%] bg-red-600 rounded" />
                      <Heading size="s" as="h6" className="!text-red-600">
                        This Month
                      </Heading>
                    </div>
                    <Heading size="2xl" as="h1" className="tracking-[1.44px] !font-inter">
                      Best Selling Products
                    </Heading>
                  </div>
                  <a
                    href="#"
                    className="flex justify-center items-center w-[159px] h-[56px] px-[35px] py-4 bg-red-600 rounded"
                  >
                    <Text as="p" className="!text-gray-50 !font-medium">
                      View All
                    </Text>
                  </a>
                </div>
                <div className="flex flex-row w-full gap-[30px]">
                  <ECommerceHomePageCart className="flex flex-col items-start justify-start gap-4" />
                  <ECommerceHomePageCart1 className="flex flex-col items-start justify-start gap-4" />
                  <ECommerceHomePageCart2 className="flex flex-col items-start justify-start gap-4" />
                  <ECommerceHomePageCart3 className="flex flex-col items-start justify-start gap-[15px]" />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[139px] mx-auto bg-black-900_02 max-w-[1170px]">
                <div className="flex flex-row justify-start items-center w-[91%] gap-[43px]">
                  <div className="flex flex-col items-start justify-start w-[43%] gap-[33px]">
                    <Heading size="s" as="h6" className="!text-green-A400">
                      Categories
                    </Heading>
                    <Heading size="3xl" as="h1" className="!text-gray-50 tracking-[1.92px] !font-inter">
                      Enhance Your Music Experience
                    </Heading>
                    <div className="flex flex-row justify-between w-[73%]">
                      <Button size="8xl" shape="square" className="w-[62px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                      <Button size="8xl" shape="square" className="w-[62px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                      <Button size="8xl" shape="square" className="w-[62px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                      <Button size="8xl" shape="square" className="w-[62px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <Button color="green_A400" size="7xl" shape="round" className="font-medium min-w-[171px]">
                      Buy Now!
                    </Button>
                  </div>
                  <div className="h-[500px] w-[54%] relative">
                    <div className="h-[500px] w-[89%] left-[2%] bottom-0 top-0 m-auto bg-blue_gray-100_75 backdrop-opacity-[0.3] blur-[200.00px] absolute rounded-[50%]" />
                    <div className="flex flex-row justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_jbl_boombox_2_hero_020_x1.png"
                        alt="jblboomboxtwo"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full mt-[71px] gap-[58px] mx-auto max-w-[1170px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start w-[35%] gap-[25px]">
                    <div className="flex flex-row justify-start items-center w-[36%] gap-4">
                      <div className="h-[40px] w-[15%] bg-red-600 rounded" />
                      <Heading size="s" as="h6" className="!text-red-600">
                        Our Products
                      </Heading>
                    </div>
                    <Heading size="2xl" as="h1" className="tracking-[1.44px] !font-inter">
                      Explore Our Products
                    </Heading>
                  </div>
                  <Button size="6xl" shape="square" className="w-[9%]">
                    <Img src="images/img_arrow_left.svg" />
                  </Button>
                </div>
                <div className="justify-center w-full gap-[30px] grid-cols-4 grid">
                  <ECommerceHomePageCart4 className="flex flex-col items-start justify-start w-full gap-4" />
                  <ECommerceHomePageCart5 className="flex flex-col items-start justify-start w-full gap-4" />
                  <ECommerceHomePageCart6 className="flex flex-col items-start justify-start w-full gap-4" />
                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    <div className="flex flex-row justify-end items-start w-full p-3 bg-gray-100 rounded">
                      <Img
                        src="images/img_curology_j7pkvqrtusm_unsplash.png"
                        alt="curology_one"
                        className="w-[70%] mt-[34px] mb-[33px] object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-[14%] ml-[3px] gap-2">
                        <Button shape="square" className="w-[34px]">
                          <Img src="images/img_wishlist.svg" />
                        </Button>
                        <Button shape="square" className="w-[34px]">
                          <Img src="images/img_quick_view.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[74%] pt-0.5 gap-[5px]">
                      <Text as="p" className="!font-medium">
                        Curology Product Set{" "}
                      </Text>
                      <div className="flex flex-row justify-start items-center w-full gap-2">
                        <Text as="p" className="!text-red-600 !font-medium">
                          $500
                        </Text>
                        <div className="flex flex-row justify-start items-center w-[75%] gap-2">
                          <RatingBar
                            value={4}
                            isEditable={true}
                            color="#00000071"
                            activeColor="#ffad33"
                            size={20}
                            className="flex justify-between w-[100px] rounded-[1px]"
                          />
                          <Heading as="p" className="!text-black-900_87 opacity-0.5">
                            (145)
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ECommerceHomePageCart7 className="flex flex-col items-start justify-start w-full gap-[15px]" />
                  <ECommerceHomePageCart8 className="flex flex-col items-start justify-start w-full gap-4" />
                  <ECommerceHomePageCart9 className="flex flex-col items-start justify-start w-full gap-4" />
                  <ECommerceHomePageCart10 className="flex flex-col items-start justify-start w-full gap-4" />
                </div>
              </div>
              <Button
                color="red_600"
                size="7xl"
                shape="round"
                className="mt-[60px] ml-[468px] font-medium min-w-[234px]"
              >
                View All Products
              </Button>
              <div className="flex flex-col items-start justify-start w-[17%] mt-[140px] pb-0.5 gap-[21px]">
                <div className="flex flex-row justify-start items-center w-[51%] gap-4">
                  <div className="h-[40px] w-[19%] bg-red-600 rounded" />
                  <Heading size="s" as="h6" className="!text-red-600">
                    Featured
                  </Heading>
                </div>
                <Heading size="2xl" as="h1" className="tracking-[1.44px] !font-inter">
                  New Arrival
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-full mt-[60px] gap-[30px] mx-auto max-w-[1170px]">
                <div className="h-[600px] w-[49%] pt-[29px] px-[29px] bg-black-900_02 relative rounded">
                  <Img
                    src="images/img_ps5_slim_goedko.png"
                    alt="ps5slimgoedko"
                    className="h-[511px] w-[511px] bottom-0 right-0 left-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-start w-[43%] gap-[18px] bottom-[5%] left-[6%] m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full gap-2.5">
                      <Heading size="lg" as="h4" className="!text-gray-50 tracking-[0.72px] !font-inter">
                        PlayStation 5
                      </Heading>
                      <Text size="s" as="p" className="!text-gray-50">
                        Black and White version of the PS5 coming out on sale.
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start w-[34%]">
                      <div className="flex flex-col items-center justify-start w-full pb-0.5">
                        <Text as="p" className="!text-white-A700 !font-medium">
                          Shop Now
                        </Text>
                        <Img
                          src="images/img_underline.svg"
                          alt="underline_one"
                          className="h-px mt-[-2px] opacity-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] gap-8">
                  <div className="flex flex-row justify-end w-full bg-black-900 rounded">
                    <div className="flex flex-row justify-end items-center w-[96%]">
                      <div className="flex flex-col items-start justify-start w-[47%] gap-4 z-[1]">
                        <div className="flex flex-col items-center justify-start gap-[13px]">
                          <Heading size="lg" as="h4" className="!text-gray-50 tracking-[0.72px] !font-inter">
                            Women’s Collections
                          </Heading>
                          <Text size="s" as="p" className="!text-gray-50">
                            Featured woman collections that give you another vibe.
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-[32%] pt-0.5">
                          <div className="flex flex-col items-center justify-start w-full pb-0.5">
                            <Text as="p" className="!text-white-A700 !font-medium">
                              Shop Now
                            </Text>
                            <Img
                              src="images/img_underline.svg"
                              alt="underline_three"
                              className="h-px mt-[-2px] opacity-0.5"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_attractive_woma.png"
                        alt="attractivewoma"
                        className="w-[80%] ml-[-141px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full gap-[30px]">
                    <div className="h-[284px] w-[48%] p-[21px] bg-black-900_02 relative rounded">
                      <div className="flex flex-col items-start justify-start w-[69%] gap-[9px] bottom-[8%] left-[9%] m-auto absolute">
                        <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                          <Heading size="lg" as="h4" className="!text-gray-50 tracking-[0.72px] !font-inter">
                            Speakers
                          </Heading>
                          <Text size="s" as="p" className="!text-gray-50">
                            Amazon wireless speakers
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-[45%]">
                          <div className="flex flex-col items-center justify-start w-full pb-0.5">
                            <Text as="p" className="!text-white-A700 !font-medium">
                              Shop Now
                            </Text>
                            <Img
                              src="images/img_underline.svg"
                              alt="underline_five"
                              className="h-px mt-[-2px] opacity-0.5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="justify-center h-[221px] w-[73%] left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="justify-center h-[196px] w-[196px] left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-100_e5 backdrop-opacity-[0.5] blur-[300.00px] absolute rounded-[50%]" />
                        <Img
                          src="images/img_69_694768_amazo.png"
                          alt="69694768amazo"
                          className="justify-center h-[221px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[48%] p-4 bg-black-900_02 rounded">
                      <div className="flex flex-col items-start justify-start h-[239px] w-[238px] my-1.5">
                        <div className="h-[238px] w-[238px] p-2 bg-blue_gray-100_e5 backdrop-opacity-[0.5] blur-[300.00px] relative rounded-[50%]">
                          <div className="flex flex-col items-start justify-start gap-1 bottom-[14%] left-[3%] m-auto absolute">
                            <Heading size="lg" as="h4" className="!text-gray-50 tracking-[0.72px] !font-inter">
                              Perfume
                            </Heading>
                            <Text size="s" as="p" className="!text-gray-50">
                              GUCCI INTENSE OUD EDP
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Img
                              src="images/img_652e82cd70aa652.png"
                              alt="652e82cd70aa652"
                              className="w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[35%] mt-[-22px] ml-2 z-[1]">
                          <div className="flex flex-col items-center justify-start w-full pb-0.5">
                            <Text as="p" className="!text-white-A700 !font-medium">
                              Shop Now
                            </Text>
                            <Img
                              src="images/img_underline.svg"
                              alt="underline_seven"
                              className="h-px mt-[-2px] opacity-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ECommerceHomePageListicondeliver
                image="images/img_group_1000005938.svg"
                shieldtickOne="images/img_shield_tick.svg"
                moneyback="MONEY BACK GUARANTEE"
                duration="We reurn money within 30 days"
                className="flex flex-row w-full mt-[140px] gap-[88px] mx-auto max-w-[943px]"
              />
              <Button size="6xl" shape="square" className="w-[46px] mt-[61px] ml-[1170px]">
                <Img src="images/img_fill_with_up_arrow.svg" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <Footer1 className="flex justify-center items-center w-full mt-8 py-[23px] bg-black-900_02" />
        </div>
      </div>
    </>
  );
}
