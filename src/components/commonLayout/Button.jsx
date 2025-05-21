import React from "react";

const Button = ({
  text,
  bg = "#FF624C",
  color = "white",
  paddingX = "40px",
  paddingY = "16px",
  border = "none",
}) => {
  return (
    <>
      <button
        className={`rounded-[10px]  font-[Montserrat] cursor-pointer font-bold text-xl`}
        style={{
          padding: `${paddingY} ${paddingX} `,
          border: border ,
          background: bg ,
          color:  color ,
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
