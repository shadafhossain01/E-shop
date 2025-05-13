import React from "react";
import Container from "../commonLayout/Container"
import { CiSearch } from "react-icons/ci";
import  Cart from "../../svg/Cart"
import UserIcon from "../../svg/UserIcon"

const MiddleHeader = () => {
  return (
    <Container>
      <div className="flex justify-between pt-9 pb-8 items-center">
        <img src="images/logo.png" className="h-[40px]" />
        <div className="flex items-center justify-between">
          {/* Input Box */}
          <div className="relative flex items-center mr-12">
            <input
              placeholder="Search Products ..."
              type="text"
              className="w-[332px] py-[18px] px-6 border-[1px] border-[#979797] rounded-2xl"
            />
            <CiSearch className="absolute right-5" />
          </div>
          {/* Cart Box */}
          <div className="flex items-center gap-5 mr-[89px] relative after:absolute after:w-[1px] after:h-8 after:bg-[#979797] after:left-[145px]">
            <div>
              <Cart />
            </div>
            <div>
              <span className="font-[Montserrat] text-[16px]">Cart</span>
              <p className="font-[Montserrat] font-bold text-sm">$ 150,00</p>
            </div>
          </div>
          {/* user Box */}
          <div className="flex items-center gap-5">
            <div>
              <UserIcon />
            </div>
            <div>
              <span className="font-[Montserrat] text-[16px]">User</span>
              <p className="font-[Montserrat] font-bold text-sm">Account</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleHeader;
