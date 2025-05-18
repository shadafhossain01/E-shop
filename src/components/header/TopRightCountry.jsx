import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const TopRightCountry = () => {

const countries = [
    {
      name: "United State",
      value: "US",
      flag: "https://flagcdn.com/16x12/us.png",
    },
    { name: "Canada", 
      value: "CA", 
      flag: "https://flagcdn.com/16x12/ca.png" },
    {
      name: "United King",
      value: "GB",
      flag: "https://flagcdn.com/16x12/gb.png",
    },
    {
      name: "Australia",
      value: "AU",
      flag: "https://flagcdn.com/16x12/au.png",
    },
    { name: "Germany", value: "DE", flag: "https://flagcdn.com/16x12/de.png" },
    { name: "France", value: "FR", flag: "https://flagcdn.com/16x12/fr.png" },
  ];

const [selectCountry, setSelectCountry] = useState(null);
const [isOpen,setIsOpen]=useState(false)

const handleOpen=()=>{
  setIsOpen(!isOpen)
}

const handleSetCountry=(country)=>{
setSelectCountry(country);
setIsOpen(false)
}

  return (
    <>
      <select
        name="country"
        className="hidden"
        value={selectCountry?.value || ""}
        onChange={(e) => {
          const country = countries.find((c) => c.name === e.target.value);
          setSelectCountry(country);
        }}
      >
        {countries.map((count) => {
          <option value={count.name}>{count.name}</option>;
        })}
      </select>

      <div
        className="cursor-pointer w-[160px] flex items-center font-['Montserrat'] text-sm"
        onClick={handleOpen}
      >
        {selectCountry ? (
          <>
            <img src={selectCountry?.flag} className="w-5 h-4 mr-2" />
            <span className="mr-2">{selectCountry?.name}</span>
            <IoIosArrowDown />
          </>
        ) : (
          <p className="flex items-center gap-3">
            Select Country <IoIosArrowDown />
          </p>
        )}
      </div>

      {isOpen && (
        <ul className="bg-white shadow-lg border-gray-300 z-10 absolute w-[160px]" >
          {countries.map((country, index) => (
            <li
              onClick={() => handleSetCountry(country)}
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer font-['Montserrat']"
            >
              <img src={country?.flag} className="w-5 h-4 mr-2" />
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TopRightCountry