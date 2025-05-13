import React from 'react'
import Container from "../commonLayout/Container"
import { CiLocationOn } from "react-icons/ci";
import {Link } from "react-router-dom"
import { BsTelephone } from "react-icons/bs";
import TopRightBar from './TopRightBar';

const TopHeader = () => {
  return (
    <div className="border border-b-2 border-[#CBCBCB]">
      <Container>
        <div className="flex justify-between py-[22px]">
          <div className="flex items-center gap-[49px] font-[Montserrat]">
            <Link
              to="https://maps.app.goo.gl/8VMfTQtwVsSFhiC18"
              target="_blank"
              className="flex items-center gap-2 relative after:absolute after:content-[''] after:w-[1px] after:h-8 after:bg-[#CBCBCB] after:top-['50%'] after:left-[257px]"
            >
              <CiLocationOn />
              <span className="text-sm">123 Main Street, Anytown USA</span>
            </Link>
            <Link
              to="tel:+1 (555) 123-4567"
              className="flex items-center gap-2"
            >
              <BsTelephone />
              <span className="text-sm">+1 (555) 123-4567</span>
            </Link>
          </div>
          <TopRightBar/>
        </div>
      </Container>
    </div>
  );
}

export default TopHeader