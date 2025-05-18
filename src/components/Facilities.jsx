import React from "react" 
import Container from "../components/commonLayout/Container"
import Headset from "../svg/Headset";
import Security from "../svg/Security";
import Delivery from "../svg/Delivery";
import ReturnItem from "../svg/ReturnItem";

const Facilities = () => {
  return (
    <div className="my-20 ">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            <Headset />
            <div>
              <h6 className="text-[#303030] font-bold font-['Montserrat'] text-base leading-[24px]">
                Responsive
              </h6>
              <p className="text-[#303030] font-normal font-['Montserrat'] text-base">
                Customer service available 24/7
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Security />
            <div>
              <h6 className="text-[#303030] font-bold font-['Montserrat'] text-base leading-[24px]">
                Secure
              </h6>
              <p className="text-[#303030] font-normal font-['Montserrat'] text-base">
                Certified marketplace since 2017
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Delivery />
            <div>
              <h6 className="text-[#303030] font-bold font-['Montserrat'] text-base leading-[24px]">
                Shipping
              </h6>
              <p className="text-[#303030] font-normal font-['Montserrat'] text-base">
                Free, fast, and reliable worldwide
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <ReturnItem />
            <div>
              <h6 className="text-[#303030] font-bold font-['Montserrat'] text-base leading-[24px]">
                Transparent
              </h6>
              <p className="text-[#303030] font-normal font-['Montserrat'] text-base">
                Hassle-free return policy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facilities;
