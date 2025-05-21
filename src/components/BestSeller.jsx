import React from "react";
import Container from "./commonLayout/Container";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ProductLayout from "./commonLayout/ProductLayout";
import { Link } from "react-router-dom";

const BestSeller = () => {
  return (
    <div className="mb-[80px]">
      <Container>
        <div className="flex gap-[74px]">
          <div className="basis-[70%]">
            <div className="mb-[48px] justify-between flex items-center">
              <h2 className="font-['Poppins'] font-semibold text-[36px] leading-[46px] ">
                Best Seller
              </h2>
              <Link to={"#"}>
                <h6 className="text-[#FF624C] font-['Montserrat'] font-bold text-base flex items-center gap-4 cursor-pointer">
                  View All <HiOutlineArrowNarrowRight />
                </h6>
              </Link>
            </div>
            <div className="grid grid-cols-3">
              <ProductLayout
                price="1199.00"
                reviewnumber="500"
                title="Wireless Bluetooth Speaker Portable Sou..."
                category="A U D I O"
                starCount="4"
                img={"./images/placeholder.png"}
              />
              <ProductLayout
                price="1000"
                reviewnumber="500"
                title="Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K ..."
                category="tablet"
                starCount="4"
                img={"./images/placeholder.png"}
                showDiscount={true}
                discountRetangle={true}
                discountCircle={false}
                percentage="30%"
              />
              <ProductLayout
                price="899.00"
                reviewnumber="300"
                title="Mobile Watch A Series GPS 7/144 45 mm..."
                category="watch"
                starCount="4"
                img={"./images/placeholder.png"}
              />
              <ProductLayout
                price="999"
                reviewnumber="500"
                title="LT Phone RAM 16/256 GB Rose Gold Guaran..."
                category="Phone"
                starCount="5"
                img={"./images/placeholder.png"}
              />
              <ProductLayout
                price="1659.00"
                reviewnumber="200"
                title="Gaming Laptop ZDY 15.6 Inch 512 GB VGA ..."
                category="LAPTOp"
                starCount="1"
                img={"./images/placeholder.png"}
              />
              <ProductLayout
                price="5699.00"
                reviewnumber="500"
                title="Wash Machine 11 KG Front Loading Steam ..."
                category="home"
                starCount="1"
                img={"./images/placeholder.png"}
                showDiscount={true}
                discountRetangle={true}
                discountCircle={false}
                percentage="10%"
              />
            </div>
          </div>
          <div>
            <Link to={"#"}>
              <img src="./images/Promo Banner.png" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
