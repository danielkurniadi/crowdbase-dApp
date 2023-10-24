import React from "react";

const CustomButton = ({
  type = "button",
  title = "Click Me",
  handleClick = () => {},
  styles = "",
}) => {
  return (
    <button
      type={type}
      className={`font-epilogue text-[14px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
