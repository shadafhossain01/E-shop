import React from "react";
import Container from "../commonLayout/Container";
import Button from "../commonLayout/Button";

const TopFooter = () => {
  return (
    <div>
      <Container>
        <div
          className="rounded-3xl py-[114px] px-[100px]"
          style={{
            background:
              " linear-gradient(90deg,rgba(244, 244, 244, 1) 10%, rgba(217, 217, 217, 1) 52%)",
          }}
        >
          <h2 className="font-semibold font-['Poppins']  text-4xl leading-[46px]">
            Get Our Updates
          </h2>
          <p className="mt-4 mb-8 max-w-[490px] font-['Montserrat'] text-xl leading-[30px] text-[#303030] ">
            Browse our wide selection of electronics and find the perfect promo
            for you from newsletter.
          </p>
          <input
            type="text"
            placeholder="Enter your email address ... "
            className="font-['Montserrat'] w-[494px] bg-white p-6 rounded-[10px] mb-4 text-base border border-[#929292] "
          />
          <div>
            <Button text={"Subscribe"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopFooter;
