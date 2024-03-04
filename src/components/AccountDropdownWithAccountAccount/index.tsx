import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  managemy?: string;
  myorder?: string;
  my?: string;
  myreviews?: string;
  logout?: string;
}

export default function AccountDropdownWithAccountAccount({
  managemy = "Manage My Account",
  myorder = "My Order",
  my = "My Cancellations",
  myreviews = "My Reviews",
  logout = "Logout",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end w-full p-[9px] bg-black-900_0a rounded">
        <div className="flex flex-col items-start justify-start w-full mt-2 gap-[13px] mx-auto max-w-[192px]">
          <div className="flex flex-row justify-start items-center gap-4">
            <Img src="images/img_user_gray_50.svg" alt="user_three" className="h-[32px] w-[32px]" />
            <Text size="s" as="p" className="!text-gray-50 text-center">
              {managemy}
            </Text>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <Button size="xs" shape="square" className="w-[24px]">
              <Img src="images/img_icon_mallbag.svg" />
            </Button>
            <Text size="s" as="p" className="!text-gray-50 text-center">
              {myorder}
            </Text>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <Button size="xs" shape="square" className="w-[24px]">
              <Img src="images/img_icon_cancel.svg" />
            </Button>
            <Text size="s" as="p" className="!text-gray-50 text-center">
              {my}
            </Text>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <Img src="images/img_vector.svg" alt="vector_one" className="h-[24px] w-[24px] rounded-[1px]" />
            <Text size="s" as="p" className="!text-gray-50 text-center">
              {myreviews}
            </Text>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <Button size="xs" shape="square" className="w-[24px] mb-px rotate-[180deg]">
              <Img src="images/img_icon_logout.svg" />
            </Button>
            <a href="#">
              <Text size="s" as="p" className="!text-gray-50 text-center">
                {logout}
              </Text>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
