import Container from "../components/commonLayout/Container"
import ProductLayout from "./commonLayout/ProductLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className,style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        fontSize: "22px",
        color: "#303030",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid #303030",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateX(23px)"
      }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className,style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        fontSize: "22px",
        color: "#303030",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid #303030",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateX(-23px)"
      }}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
}


const FeatureProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mb-[80px]">
      <Container>
        <div className="mb-[48px] justify-between flex items-center">
          <h2 className="font-['Poppins'] font-semibold text-[36px] leading-[46px] ">
            Featured Products
          </h2>
          <Link to={"#"}>
            <h6 className="text-[#FF624C] font-['Montserrat'] font-bold text-base flex items-center gap-4">
              View All <HiOutlineArrowNarrowRight />
            </h6>
          </Link>
        </div>
        <Slider {...settings}>
          <ProductLayout
            price="999.99"
            reviewnumber="500"
            title="JPhone 13 High Quality Value Buy Best Cam..."
            category="Iphone"
            starCount="4"
            img={"./images/productImg.png"}
          />
          <ProductLayout
            price="59.99"
            reviewnumber="500"
            title="WH-1000XM4 Wireless Headphones High Qu..."
            category="audio"
            starCount="4"
            img={"./images/productImg.png"}
            showDiscount={true}
            discountRetangle={true}
            discountCircle={false}
            percentage="50%"
          />
          <ProductLayout
            price="1999.00"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="LAPTOp"
            starCount="4"
            img={"./images/productImg.png"}
          />
          <ProductLayout
            price="558.99"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="Pc"
            starCount="3"
            img={"./images/productImg.png"}
          />
          <ProductLayout
            price="100.00"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="LAPTOp"
            starCount="1"
            img={"./images/productImg.png"}
          />
        </Slider>
      </Container>
    </div>
  );
};

export default FeatureProduct;
