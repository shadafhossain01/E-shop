import React from "react";
import Container from "../components/commonLayout/Container"
import { Link } from "react-router-dom";


const Offer = () => {
  return (
    <div className="my-[80px]">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"#"}>
            <img src="images/offer1.png" />
          </Link>
          <Link to={"#"}>
            <img src="images/offer2.png" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
