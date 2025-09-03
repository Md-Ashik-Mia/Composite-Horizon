import React from "react";
 
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const GreenButton: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
<button
      type={type}
      onClick={onClick}
      className={` bg-lime-500 text-white py-2 rounded hover:bg-lime-600 ${className}`}
>
      {text}
</button>
  );
};
 
export default GreenButton;