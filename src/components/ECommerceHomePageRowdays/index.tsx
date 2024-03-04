import React from "react";
import { Heading, Text } from "./..";

interface Props {
  className?: string;
  days?: string;
  three?: string;
  hours?: string;
  twentythree?: string;
  minutes?: string;
  nineteen?: string;
  seconds?: string;
  fiftysix?: string;
}

export default function ECommerceHomePageRowdays({
  days = "Days",
  three = "03",
  hours = "Hours",
  twentythree = "23",
  minutes = "Minutes",
  nineteen = "19",
  seconds = "Seconds",
  fiftysix = "56",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start">
        <Text size="xs" as="p">
          {days}
        </Text>
        <Heading size="xl" as="h1" className="tracking-[1.28px] !font-inter">
          {three}
        </Heading>
      </div>
      <div className="flex w-[4px] h-[16px]" />
      <div className="flex flex-col items-start justify-start">
        <Text size="xs" as="p">
          {hours}
        </Text>
        <Heading size="xl" as="h2" className="tracking-[1.28px] !font-inter">
          {twentythree}
        </Heading>
      </div>
      <div className="flex w-[4px] h-[16px]" />
      <div className="flex flex-col items-start justify-start gap-px">
        <Text size="xs" as="p">
          {minutes}
        </Text>
        <Heading size="xl" as="h2" className="h-[39px] tracking-[1.28px] !font-inter">
          {nineteen}
        </Heading>
      </div>
      <div className="flex w-[4px] h-[16px]" />
      <div className="flex flex-col items-start justify-start gap-px">
        <Text size="xs" as="p">
          {seconds}
        </Text>
        <Heading size="xl" as="h2" className="tracking-[1.28px] !font-inter">
          {fiftysix}
        </Heading>
      </div>
    </div>
  );
}
