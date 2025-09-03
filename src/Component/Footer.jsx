import React from "react";

export default function Footer() {
  /* background-color: #161616;
    color: #AAAAAA;
    height: 74px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    font-weight: 500; */
  return (
    <>
      <footer className="flex justify-center items-center font-[500] h-[74px] bg-[#161616] text-[#AAAAAA] mt-auto">
        &copy; {new Date().getFullYear()} #VANLIFE
      </footer>
    </>
  );
}
