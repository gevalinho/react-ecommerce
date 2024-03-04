import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Img } from "../../components";
import AccountDropdownWithAccountHeader from "../../components/AccountDropdownWithAccountHeader";
import AccountDropdownWithAccountTopheader from "../../components/AccountDropdownWithAccountTopheader";
import CartRoadmap from "../../components/CartRoadmap";
import Footer from "../../components/Footer";

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex flex-col items-center justify-center w-full">
          <AccountDropdownWithAccountTopheader className="flex flex-row justify-end w-full p-3 bg-black-900_02" />
          <AccountDropdownWithAccountHeader
            home="Home"
            className="flex flex-row justify-between w-full mt-10 mx-auto max-w-[1170px]"
          />
          <Img src="images/img_line_3.svg" alt="linethree_one" className="h-px mt-4" />
        </header>
        <div className="flex flex-row justify-center w-full mt-[79px] max-w-[1170px]">
          <div className="flex flex-col items-center justify-start w-full gap-[78px]">
            <div className="flex flex-row justify-between items-center w-full">
              <CartRoadmap account="Home" className="flex flex-row justify-between w-auto" />
              <Text size="s" as="p">
                <span className="text-black-900_02">Welcome! </span>
                <span className="text-red-600">Md Rimel</span>
              </Text>
            </div>
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col items-start justify-start w-[18%] mt-0.5">
                <Text as="p" className="!font-medium">
                  Manage My Account
                </Text>
                <div className="flex flex-col items-start justify-start mt-[13px] ml-[35px] gap-2">
                  <Text as="p" className="!text-red-600">
                    My Profile
                  </Text>
                  <Text as="p" className="!text-black-900_87 opacity-0.5">
                    Address Book
                  </Text>
                  <Text as="p" className="!text-black-900_87 opacity-0.5">
                    My Payment Options
                  </Text>
                </div>
                <Text as="p" className="mt-[26px] !font-medium">
                  My Orders
                </Text>
                <Text as="p" className="mt-4 ml-[35px] !text-black-900_87 opacity-0.5">
                  My Returns
                </Text>
                <Text as="p" className="mt-[7px] ml-[35px] !text-black-900_87 opacity-0.5">
                  My Cancellations
                </Text>
                <Text as="p" className="mt-[15px] !font-medium">
                  My WishList
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-[75%] p-[38px] bg-white-A700 shadow-xs rounded">
                <Text size="lg" as="p" className="!text-red-600">
                  Edit Your Profile
                </Text>
                <div className="flex flex-row justify-between w-[90%] mt-[15px]">
                  <div className="flex flex-col items-start justify-start w-[47%] gap-2">
                    <Text as="p">First Name</Text>
                    <Input name="firstName" placeholder="Md" className="w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[47%] gap-[7px]">
                    <Text as="p">Last Name</Text>
                    <Input name="lastName" placeholder="Rimel" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-[90%] mt-[23px]">
                  <div className="flex flex-col items-start justify-start w-[47%] gap-2">
                    <Text as="p">Email</Text>
                    <Input name="email" placeholder="rimel1111@gmail.com" className="w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[47%] gap-[7px]">
                    <Text as="p">Address</Text>
                    <Input name="address" placeholder="Kingston, 5236, United State" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] mt-6 gap-4">
                  <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[5px]">
                    <Text as="p">Password Changes</Text>
                    <Input name="password" placeholder="Current Passwod" className="w-full" />
                  </div>
                  <Input name="placeboxinfo" placeholder="New Passwod" className="w-full" />
                  <Input name="placeboxinfo" placeholder="Confirm New Passwod" className="w-full" />
                </div>
                <div className="flex flex-row justify-between items-center w-[39%] mt-6">
                  <Text as="p">Cancel</Text>
                  <Button color="red_600" size="7xl" shape="round" className="font-medium min-w-[214px]">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[140px] py-[23px] bg-black-900_02" />
      </div>
    </>
  );
}
