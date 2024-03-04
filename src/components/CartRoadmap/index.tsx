import React from "react";
import { Text } from "./..";

interface Props {
  className?: string;
  account?: string;
  nothing?: string;
  linefourteen?: string;
  nothingOne?: string;
  linefifteenOne?: string;
  nothingTwo?: string;
  linesixteenOne?: string;
  nothingThree?: string;
}

export default function CartRoadmap({
  account = "Account",
  nothing = "My Account",
  linefourteen,
  nothingOne,
  linefifteenOne,
  nothingTwo,
  linesixteenOne,
  nothingThree,
  ...props
}: Props) {
  return (
    <div {...props}>
      <Text size="s" as="p" className="mt-px !text-black-900_87 opacity-0.5">
        {account}
      </Text>
      <div className="h-px w-[2%] mt-[5px] opacity-0.5 rotate-[-117deg] bg-black-900_87" />
      <Text size="s" as="p" className="mt-0.5 !text-black-900_87 opacity-0.5">
        {nothing}
      </Text>
      {!!linefourteen ? <div className="h-px w-[2%] mt-[5px] opacity-0.5 rotate-[-117deg] bg-black-900_87" /> : null}
      {!!nothingOne ? (
        <Text size="s" as="p" className="mt-px !text-black-900_87 opacity-0.5">
          {nothingOne}
        </Text>
      ) : null}
      {!!linefifteenOne ? <div className="h-px w-[2%] mt-[5px] opacity-0.5 rotate-[-117deg] bg-black-900_87" /> : null}
      {!!nothingTwo ? (
        <Text size="s" as="p" className="!text-black-900_87 opacity-0.5">
          {nothingTwo}
        </Text>
      ) : null}
      {!!linesixteenOne ? <div className="h-px w-[2%] mt-[5px] opacity-0.5 rotate-[-117deg] bg-black-900_87" /> : null}
      {!!nothingThree ? (
        <Text size="s" as="p" className="mt-px">
          {nothingThree}
        </Text>
      ) : null}
    </div>
  );
}
