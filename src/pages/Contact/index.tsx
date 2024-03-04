import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Img } from "../../components";
import CartRoadmap from "../../components/CartRoadmap";
import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header3 className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-row justify-center w-full mt-[79px] max-w-[1170px]">
          <div className="flex flex-col items-start justify-start w-full gap-20">
            <CartRoadmap account="Home" nothing="Cantact" className="flex flex-row justify-between w-[12%]" />
            <div className="flex flex-row justify-start w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-[30%] gap-8 p-[35px] bg-white-A700 shadow-xs rounded">
                <div className="flex flex-col items-start justify-start w-[98%] mt-[5px] gap-[23px]">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Button color="red_600" size="xl" className="w-[40px]">
                      <Img src="images/img_icons_phone.svg" />
                    </Button>
                    <Text as="p" className="!font-medium">
                      Call To Us
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                    <Text size="s" as="p">
                      We are available 24/7, 7 days a week.
                    </Text>
                    <Text size="s" as="p">
                      Phone: +8801611112222
                    </Text>
                  </div>
                </div>
                <Img src="images/img_underline_black_900_02.svg" alt="underline_one" className="h-px opacity-0.5" />
                <div className="flex flex-col items-start justify-start w-[93%] mb-[15px] gap-6">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Button color="red_600" size="xl" className="w-[40px]">
                      <Img src="images/img_icons_mail.svg" />
                    </Button>
                    <Text as="p" className="!font-medium">
                      Write To US
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    <Text size="s" as="p">
                      Fill out our form and we will contact you within 24 hours.
                    </Text>
                    <Text size="s" as="p">
                      Emails: customer@exclusive.com
                    </Text>
                    <Text size="s" as="p">
                      Emails: support@exclusive.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center w-[69%] gap-8 p-[31px] bg-white-A700 shadow-xs rounded">
                <div className="flex flex-row justify-start w-full mt-[9px] gap-4">
                  <Input name="name" placeholder="Your Name *" className="w-[32%]" />
                  <Input name="email" placeholder="Your Email *" className="w-[32%]" />
                  <div className="flex flex-row justify-start w-[32%]">
                    <Input name="phone" placeholder="Your Phone *" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-row justify-end w-full">
                  <div className="flex flex-row justify-start w-full p-[15px] bg-gray-100 rounded">
                    <Text as="p" className="mb-[151px] !text-black-900_87 opacity-0.5">
                      Your Massage
                    </Text>
                  </div>
                </div>
                <Button color="red_600" size="7xl" shape="round" className="mb-[9px] mr-px font-medium min-w-[215px]">
                  Send Massage
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[140px] py-[23px] bg-black-900_02" />
      </div>
    </>
  );
}
