import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white h-[100px] w-full absolute bottom-0 mt-10 px-[80px] flex flex-col md:flex-col md:h-[100px] lg:h-[100px] lg:flex-row items-center justify-between border-t-2 gap-4">
      <div className="flex items-center mb-2 md:mb-0">
        <p className="text-xs">
          © 2024 Copyright myfinder.ai / All Rights Reserved.
        </p>
      </div>
      <div className="flex">
        <nav>
          <a href="#" className="px-4 text-xs">
            About myFinder
          </a>
          <a href="#" className="px-4 text-xs">
            MyCommunity
          </a>
          <a href="#" className="px-4 text-xs">
            Attraction
          </a>
          <a href="#" className="px-4 text-xs">
            Privacy
          </a>
          <a href="#" className="px-4 text-xs">
            Help Center
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
