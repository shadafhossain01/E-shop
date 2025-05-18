import { Link } from "react-router-dom";
import Container from "../commonLayout/Container"
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRef } from "react";

const BottomHeader = () => {
  const [productDropdown,setProductDropdown]=useState(false)
  const [categoryDropdown,setCategoryDropdown]=useState(false)
  const productDropdwonRef=useRef(null)
  const categoryDropdwonRef=useRef(null)

  useEffect(()=>{
    function handleToggle(e){
      if(!productDropdwonRef.current.contains(e.target)){
        setProductDropdown(false)
      }
    }
    document.addEventListener("click",handleToggle)
  },[])

  useEffect(()=>{
    function handleToggle(e){
      if (!categoryDropdwonRef.current.contains(e.target)) {
        setCategoryDropdown(false);
      }
    }
    document.addEventListener("click",handleToggle)
  },[])

  return (
    <div className="bg-[#FF624C] py-6">
      <Container>
        <div className="flex justify-between">
          <ul className="flex items-center gap-[80px]">
            <li>
              <button
              ref={categoryDropdwonRef}
                onClick={()=>setCategoryDropdown(!categoryDropdown)}
                className="flex items-center gap-4 font-bold text-white text-base font-['Montserrat'] relative cursor-pointer"
              >
                <FaBars />
                All Categories
                {
                  
                  categoryDropdown && <div className="absolute z-10 top-11 w-[160px] bg-white shadow-lg">
                  <ul className="font-['Montserrat'] text-[#333] leading-[50px] cursor-pointer">
                  <li className="hover:bg-gray-200 border border-b-1 border-[#c7c7c7]"><Link>Category 1</Link></li>
                  <li className="hover:bg-gray-200 border border-b-1 border-[#c7c7c7]"><Link>Category 2</Link></li>
                  <li className="hover:bg-gray-200 border border-b-1 border-[#c7c7c7]"><Link>Category 3</Link></li>
                  <li className="hover:bg-gray-200 border border-b-1 border-[#c7c7c7]"><Link>Category 4</Link></li>
                  <li className="hover:bg-gray-200 border border-b-1 border-[#c7c7c7]"><Link>Category 5</Link></li>
                  <li className="hover:bg-gray-200 border border-b-1 border-[#c7c7c7]"><Link>Category 6</Link></li>
                  </ul>
                  </div>
                
                }
              </button>
            </li>
            <li>
              <button
              ref={productDropdwonRef}
               onClick={()=>setProductDropdown(!productDropdown)}
                className="flex items-center gap-4 font-bold text-white text-base font-['Montserrat'] relative cursor-pointer"
              >
                Products
                <IoIosArrowDown />
                {
                  productDropdown && <div className="absolute z-10 top-11 w-[160px] bg-white shadow-lg">
                  <ul className="font-['Montserrat'] text-[#333] leading-[50px] cursor-pointer">
                  <li className="hover:bg-gray-200"><Link>Product 1</Link></li>
                  <li className="hover:bg-gray-200"><Link>Product 2</Link></li>
                  <li className="hover:bg-gray-200"><Link>Product 3</Link></li>
                  <li className="hover:bg-gray-200"><Link>Product 4</Link></li>
                  <li className="hover:bg-gray-200"><Link>Product 5</Link></li>
                  <li className="hover:bg-gray-200"><Link>Product 6</Link></li>
                  </ul>
                  </div>
                }
              </button>
            </li>
            <li>
              <Link
                to={"/blog"}
                className="font-bold text-white text-base font-['Montserrat']"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="font-bold text-white text-base font-['Montserrat']"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-[80px]">
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-['Montserrat']"
              >
                LIMITED SALE 👋🏻
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-['Montserrat']"
              >
                Best Seller
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="font-bold text-white text-base font-['Montserrat']"
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
