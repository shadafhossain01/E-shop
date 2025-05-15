import React from "react";
import Container from "./commonLayout/Container";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-[32px]">
      <Container>
        <Link to={"/product"}>
          <img src="images/hero.png" />
        </Link>
      </Container>
    </div>
  );
};

export default Banner;
