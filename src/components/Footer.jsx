import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <footer className="p-10 sm:px-20 flex flex-col gap-2 items-center sm:flex-row sm:justify-between ">
        <div className="text-2xl">Copyright &copy; 2023 Real Estate</div>

        <div className="text-2xl text-purple-700">
          Powered by me | Developed by Aman
        </div>
      </footer>
    </div>
  );
};

export default Footer;
