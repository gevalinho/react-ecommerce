import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img } from "../../components";
import AccountDropdownWithAccountHeader from "../../components/AccountDropdownWithAccountHeader";
import CartColumncarttotal from "../../components/CartColumncarttotal";
import CartRoadmap from "../../components/CartRoadmap";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { product: "LCD Monitor", price: "$650", quantity: "01", subtotal: "$650" },
  { product: "H1 Gamepad", price: "$550", quantity: "02", subtotal: "$1100" },
];

type TableRowType = { product: string; price: string; quantity: string; subtotal: string };

export default function CartPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end gap-5">
            <div className="h-[58px] w-[20%] mt-[30px] mb-3.5 relative">
              <Img
                src="images/img_monitor_cart_small.png"
                alt="monitorcart_one"
                className="h-[54px] w-[54px] bottom-0 right-0 m-auto object-cover absolute"
              />
              <Button size="xs" shape="square" className="w-[24px] left-0 top-0 m-auto absolute">
                <Img src="images/img_icon_cancel_white_a700.svg" />
              </Button>
            </div>
            <Text as="p" className="mb-[29px]">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pl-[35px] py-6">
            Product
          </Text>
        ),
        meta: { width: "387px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-6">
            Price
          </Text>
        ),
        meta: { width: "323px" },
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end gap-[18px]">
            <Text as="p" className="mb-[46px]">
              {info?.getValue?.()}
            </Text>
            <div className="flex flex-col items-center justify-start w-[5%] mt-[63px] mb-[43px]">
              <div className="flex justify-center h-[16px] w-[16px] rotate-[180deg]" />
              <div className="flex justify-center h-[16px] w-[16px]" />
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-6">
            Quantity
          </Text>
        ),
        meta: { width: "353px" },
      }),
      tableColumnHelper.accessor("subtotal", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-6">
            Subtotal
          </Text>
        ),
        meta: { width: "107px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header2 className="flex justify-center items-center w-full p-3 bg-black-900_02" />
        <div className="flex flex-col items-center justify-start w-full mt-10 gap-[79px]">
          <div className="flex flex-col items-center justify-start w-full gap-4">
            <AccountDropdownWithAccountHeader
              home="Home"
              className="flex flex-row justify-between w-full max-w-[1170px]"
            />
            <Img src="images/img_line_3.svg" alt="linethree_one" className="h-px" />
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-20 max-w-[1170px]">
            <CartRoadmap account="Home" nothing="Cart" className="flex flex-row justify-between w-[9%]" />
            <div className="flex flex-col items-center justify-start w-full gap-20">
              <div className="flex flex-col items-center justify-start w-full gap-6">
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "bg-white-A700 shadow-xs rounded" }}
                  rowDataProps={{ className: "" }}
                  className="w-[1170px]"
                  columns={tableColumns}
                  data={tableData}
                />
                <div className="flex flex-row justify-between w-full">
                  <Button
                    color="black_900_7f"
                    size="7xl"
                    variant="outline"
                    shape="round"
                    className="font-medium min-w-[218px]"
                  >
                    Return To Shop
                  </Button>
                  <Button
                    color="black_900_7f"
                    size="7xl"
                    variant="outline"
                    shape="round"
                    className="font-medium min-w-[195px]"
                  >
                    Update Cart
                  </Button>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-row justify-start w-[46%] gap-4">
                  <Input
                    color="black_900_02"
                    size="xl"
                    variant="outline"
                    name="coupon_code"
                    placeholder="Coupon Code"
                    className="w-[57%]"
                  />
                  <Button color="red_600" size="7xl" shape="round" className="font-medium min-w-[211px]">
                    Apply Coupon
                  </Button>
                </div>
                <CartColumncarttotal className="flex flex-col items-start justify-center p-6 border-black-900_02 border border-solid rounded" />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[140px] py-[23px] bg-black-900_02" />
      </div>
    </>
  );
}
