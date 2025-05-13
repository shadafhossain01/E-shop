import { Link } from "react-router-dom";
import Container from "../commonLayout/Container"
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const BottomHeader = () => {
  return (
    <div className="bg-[#FF624C] py-6">
      <Container>
        <div className="flex justify-between">
          <ul className="flex items-center gap-[80px]">
            <li>
              <Link
                to={""}
                className="flex items-center gap-4 font-bold text-white text-base font-[Montserrat]"
              >
                <FaBars />
                All Categories
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="flex items-center gap-4 font-bold text-white text-base font-[Montserrat]"
              >
                <IoIosArrowDown />
                Products
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-[Montserrat]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-[Montserrat]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-[80px]">
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-[Montserrat]"
              >
                LIMITED SALE 👋🏻
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-[Montserrat]"
              >
                Best Seller
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-[Montserrat]"
              >
                New Arrival
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
