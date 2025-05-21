import React from "react";
import Container from "./commonLayout/Container";
import ProductLayout from "./commonLayout/ProductLayout";
import Button from "../components/commonLayout/Button"

const NewProducts = () => {
  return (
    <div className="mb-[80px]">
      <Container>
        <div className="mb-[48px] justify-between flex items-center">
          <h2 className="font-['Poppins'] font-semibold text-[36px] leading-[46px] ">
            New Products
          </h2>
          <h6 className="text-[#303030] font-['Montserrat']  text-base flex items-center gap-4">
            Sort by
            <select className="text-[#FF624C] font-bold cursor-pointer ">
              <option>All Categories</option>
              <option>Rating</option>
              <option>Price</option>
            </select>
          </h6>
        </div>
        <div className="flex justify-between">
          <ProductLayout
            price="959.99"
            reviewnumber="150"
            title="Orange Watch 12 High Quality Health Sensor..."
            category="watch"
            starCount="4"
            img={"./images/placeholder.png"}
            showDiscount={true}
            discountRetangle={true}
            discountCircle={false}
            percentage="50%"
          />
          <ProductLayout
            price="1299.99"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="LAPTOp"
            starCount="4"
            img={"./images/placeholder.png"}
          />
          <ProductLayout
            price="799.00"
            reviewnumber="500"
            title="Ultra Tablet Qwerty HD 10765 Series Low Pri..."
            category="tablet"
            starCount="4"
            img={"./images/placeholder.png"}
          />
          <ProductLayout
            price="329.99"
            reviewnumber="500"
            title="QuietComfort 45 Wireless Headphone ..."
            category="audio"
            starCount="3"
            showDiscount={true}
            discountRetangle={true}
            discountCircle={false}
            img={"./images/placeholder.png"}
          />
          <ProductLayout
            price="1499.99"
            reviewnumber="150"
            title="CamPro HERO10 Black Sleek Design 2023 4K ..."
            category="camera"
            starCount="1"
            img={"./images/placeholder.png"}
          />
        </div>
        <div className="mt-[64px] flex justify-center">
          <Button
            text={"Load More"}
            color="#FF624C"
            border="1px solid #FF624C"
            bg="transparent"
          />
        </div>
      </Container>
    </div>
  );
};

export default NewProducts;
