import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoCartOutline, IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductLayout = ({
  price,
  reviewnumber,
  title,
  category,
  starCount,
  showDiscount =false,
  discountRetangle,
  discountCircle
}) => {

   const [star, setStar] = useState(new Array(+starCount).fill(starCount));

  return (
    <div className="border border-white hover:border-[#CBCBCB] rounded-[10px] group">
      <div className="p-6 relative">
        <img src="images/productImg.png" className="w-full" />
        {showDiscount &&
          (discountRetangle ? (
            <h5 className="font-['Montserrat'] text-base text-white font-bold bg-[#FF624C] px-[20px] py-[6px] rounded-[5px] absolute right-[15px] top-[10px]">
              20%
            </h5>
          ) : discountCircle ? (
            <h5 className="font-['Montserrat'] text-base text-white font-bold bg-[#FF624C] w-[60px] h-[60px] flex justify-center items-center rounded-full absolute right-[15px] top-[10px]">
              20%
            </h5>
          ) : null)}

        <div className="absolute flex gap-[18px]  bottom-[25px] left-[18%] scale-0 group-hover:scale-100 duration-300">
          <Link>
            <div className="flex items-center justify-center p-[5px] w-[50px] h-[50px] rounded-full border border-[#FF624C] bg-white text-[#FF624C] hover:bg-[#FF624C] hover:text-white">
              <IoCartOutline className="text-[25px]" />
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center p-[5px] w-[50px] h-[50px] rounded-full border border-[#FF624C] bg-white text-[#FF624C] hover:bg-[#FF624C] hover:text-white">
              <CiHeart className="text-[25px]" />
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center p-[5px] w-[50px] h-[50px] rounded-full border border-[#FF624C] bg-white text-[#FF624C] hover:bg-[#FF624C] hover:text-white">
              <IoShareSocialOutline className="text-[25px]" />
            </div>
          </Link>
        </div>
      </div>
      <div className="px-6">
        <p className="font-['Montserrat'] text-sm leading-[20px] tracking-[3px] text-[#303030] mt-[10px] mb-4 uppercase">
          {category}
        </p>
        <h3 className="font-['Poppins'] font-semibold text-[20px] leading-[30px] text-[#303030]  mb-2 group-hover:underline group-hover:text-[#FF624C]">
          {title}
        </h3>
        <div className="flex items-center text-[#FED550]">
          {star.map((item) => (
            <FaStar />
          ))}
          <span className=" ml-2 font-['Montserrat'] text-base text-[#303030]">
            ({reviewnumber})
          </span>
        </div>
        <h4 className="font-['Poppins'] font-semibold text-[24px] leading-[30px] mt-6 mb-[20px] group-hover:text-[#FF624C]">
          ${price}
        </h4>
      </div>
    </div>
  );
};

export default ProductLayout;
