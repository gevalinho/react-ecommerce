import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  price?: string;
  price1?: string;
  p247customer?: string;
  friendly24seven?: string;
  image?: string;
  shieldtickOne?: string;
  moneyback?: string;
  duration?: string;
}

export default function ECommerceHomePageListicondeliver({
  price = "FREE AND FAST DELIVERY",
  price1 = "Free delivery for all orders over $140",
  p247customer = "24/7 CUSTOMER SERVICE",
  friendly24seven = "Friendly 24/7 customer support",
  image,
  shieldtickOne,
  moneyback,
  duration,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-[27%] gap-[22px]">
        <div className="flex flex-col items-center justify-start h-[80px] w-[80px]">
          <div className="h-[80px] w-[80px] relative">
            <Img
              src="images/img_group_1000005938.svg"
              alt="image"
              className="justify-center h-[80px] w-[80px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <Img
              src="images/img_icon_delivery.svg"
              alt="icondelivery"
              className="justify-center h-[40px] w-[40px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[7px]">
          <Heading size="md" as="h1">
            {price}
          </Heading>
          <Text size="s" as="p" className="text-center">
            {price1}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-[28%] gap-[22px]">
        <div className="flex flex-col items-center justify-start h-[80px] w-[80px]">
          <div className="h-[80px] w-[80px] relative">
            <Img
              src="images/img_group_1000005938.svg"
              alt="image"
              className="justify-center h-[80px] w-[80px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <Img
              src="images/img_icon_customer_service.svg"
              alt="iconcustomer"
              className="justify-center h-[40px] w-[40px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[7px] max-w-[247px]">
          <Heading size="md" as="h2">
            {p247customer}
          </Heading>
          <Text size="s" as="p">
            {friendly24seven}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-[28%] gap-[22px]">
        <div className="flex flex-col items-center justify-start h-[80px] w-[80px]">
          <div className="h-[80px] w-[80px] relative">
            {!!image ? (
              <Img
                src={image}
                alt="image"
                className="justify-center h-[80px] w-[80px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
            ) : null}
            {!!shieldtickOne ? (
              <Img
                src={shieldtickOne}
                alt="shieldtick_one"
                className="justify-center h-[40px] w-[40px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[7px]">
          {!!moneyback ? (
            <Heading size="md" as="h2">
              {moneyback}
            </Heading>
          ) : null}
          {!!duration ? (
            <Text size="s" as="p">
              {duration}
            </Text>
          ) : null}
        </div>
      </div>
    </div>
  );
}
