import React from 'react'
import TopRightCountry from './TopRightCountry'
import {useState} from "react"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link} from "react-router-dom"

const TopRightBar = () => {
  const Currency = [
    "USD",
    "BDT",
    "INR",
    "PKR",
    "SAR",
    "OMR",
    "QAR",
    "AED",
    "EUR",
    "GBP",
    "CNY",
    "JPY",
    "MYR",
    "NPR",
    "AFN",
    "KWD",
    "BHD",
    "Riel",
  ];

  const [selectCurrency,setSelectCurrency]=useState(null)

  return (
    <div className="flex items-center justify-between gap-[49px]">
      <div>
        <select
          name="currency"
          value={selectCurrency || ""}
          className="font-['Montserrat'] text-sm cursor-pointer"
          onChange={(e) => {
            const newCurrency = Currency.find((c) => c == e.target.value);
            setSelectCurrency(newCurrency);
          }}
        >
          {Currency.map((curr) => (
            <option className="font-['Montserrat'] cursor-pointer" key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>
      <div className="relative after:absolute after:content-[''] after:bg-[#CBCBCB] after:w-[1px] after:h-8 after:top-[50%] after:left-[160px] after:-translate-y-2/4 before:absolute before:content-[''] before:bg-[#CBCBCB] before:w-[1px] before:h-8 before:top-[50%] before:left-[-30px] before:-translate-y-2/4">
        <TopRightCountry />
      </div>
      <div className="flex items-center gap-6">
        <Link to="#">
          <FaFacebookF />
        </Link>
        <Link to="#">
          <FaTwitter />
        </Link>
        <Link to="#">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}

export default TopRightBar