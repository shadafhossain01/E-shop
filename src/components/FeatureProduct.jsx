import Container from "../components/commonLayout/Container"
import ProductLayout from "./commonLayout/ProductLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
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
        <Slider {...settings}>
          <ProductLayout
            price="1000"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="LAPTOp"
            starCount='4'
          />
          <ProductLayout
            price="1000"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="LAPTOp"
            starCount='4'
          />
          <ProductLayout
            price="1000"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="LAPTOp"
            starCount='4'
          />
          <ProductLayout
            price="1000"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="Pc"
            starCount='3'
            showDiscount={true}
            discountRetangle={false}
            discountCircle={true}
          />
          <ProductLayout
            price="1000"
            reviewnumber="500"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            category="LAPTOp"
            starCount='1'
          />
        </Slider>
      </Container>
    </div>
  );
};

export default FeatureProduct;
