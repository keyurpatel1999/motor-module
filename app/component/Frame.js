import React from "react";

const Frame = () => {
  return (
    <div className="relative">
      <div>
        <img src="/Frame.svg" />
      </div>
      <img className="absolute bottom-0 left-28" src="/phone.svg" />
      <img src="/playApp.svg" className="absolute right-28 top-12" />
    </div>
  );
};

export default Frame;
