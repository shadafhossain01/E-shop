import React from "react";
import Container from "../commonLayout/Container";
import { Link } from "react-router-dom";
import { MdLocalPhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const BottomFooter = () => {
  return (
    <div className="mt-[100px]">
      <Container>
        <div className="flex">
          <div className="mr-[387px]">
            <img src="images/logo.png" className="mb-[158px]" />
            <div className="flex flex-col gap-4">
              <Link to={"tel:+1 (555) 123-4567"} className="relative">
                <MdLocalPhone />
                <span className="absolute -top-[3px] left-8 w-[150px] font-[Montserrat] text-sm text-[#303030]">
                  +1 (555) 123-4567
                </span>
              </Link>
              <Link to={"mailto:information@eshop.com"} className="relative">
                <SlEnvolope />
                <span className="absolute -top-[3px] left-8 w-[150px] font-[Montserrat] text-sm text-[#303030]">
                  information@eshop.com
                </span>
              </Link>
              <Link
                to="https://maps.app.goo.gl/8VMfTQtwVsSFhiC18"
                className="relative"
              >
                <CiLocationOn />
                <span className="absolute -top-[3px] left-8 w-[280px] font-[Montserrat] text-sm text-[#303030]">
                  123 Main Street, Suite 105, Anytown USA
                </span>
              </Link>
            </div>
          </div>
          <div className="mr-[96px]">
            <h4 className="font-[poppins] font-semibold text-xl text-[#303030] mb-6">
              Links
            </h4>
            <ul className="flex flex-col gap-3">
              <Link to={"#"} className="font-[Montserrat] text-base">
                Products List
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Order Tracking
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Products Guide
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Shopping Cart
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Tech Blog
              </Link>
            </ul>
          </div>
          <div className="mr-[96px]">
            <h4 className="font-[poppins] font-semibold text-xl text-[#303030] mb-6">
              Supports
            </h4>
            <ul className="flex flex-col gap-3">
              <Link to={"#"} className="font-[Montserrat] text-base">
                About Us
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Privacy Policy
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Return Policy
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Help Centre
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Store Locations
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Careers
              </Link>
            </ul>
          </div>
          <div className="mr-[80px]">
            <h4 className="font-[poppins] font-semibold text-xl text-[#303030] mb-6">
              Categories
            </h4>
            <ul className="flex flex-col gap-3">
              <Link to={"#"} className="font-[Montserrat] text-base">
                Computers & Tablets
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Mobile Phones & Accessories
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                TV & Home Theater
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Audio & Headphones
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Cameras & Camcorders
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Gaming Equipment
              </Link>
              <Link to={"#"} className="font-[Montserrat] text-base">
                Home Appliances
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="font-[poppins] font-semibold text-xl text-[#303030] mb-6">
              Payments
            </h4>
            <img src="images/payment.png" className="mb-[73px]" />
            <h4 className="font-[poppins] font-semibold text-xl text-[#303030] mb-6">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              <Link to={"#"}>
                Twitter
              </Link>
              <Link to={"#"}>
                Instagram
              </Link>
              <Link to={"#"}>Facebook</Link>
            </div>
          </div>
        </div>
        {/* Footer CopyRight Section */}
        <div className="h-[1px] bg-[#E5E5E5] w-full mt-[80px]">
          <div className=" flex justify-between py-4">
            <p className="font-[Montserrat] text-sm text-[#303030]">
              Copyright © 2023 E-Shop. All Rights Reserved.
            </p>
            <div>
              <Link
                to={""}
                className="font-[Montserrat] text-sm text-[#303030] px-3 border-r-1 "
              >
                Privacy Policy
              </Link>
              <Link
                to={""}
                className="font-[Montserrat] text-sm text-[#303030] px-3 border-r-1"
              >
                Terms & Condition{" "}
              </Link>
              <Link
                to={""}
                className="font-[Montserrat] text-sm text-[#303030] pl-3"
              >
                Sitemap{" "}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomFooter;
