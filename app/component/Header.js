import React from 'react'

const Header = () => {
  return (
    <header className="bg-white h-[120px] px-6 flex flex-col md:flex-row items-center justify-between border-b-2">
    <div className="flex items-center mb-2 md:mb-0">
      <img src="/headerLogo.png" alt="Logo" className="w-[100%] h-12 mr-2" />
    </div>
    <div className="flex justify-center flex-1 mb-2 md:mb-0">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-white rounded-2xl"
      />
    </div>
    <div className="flex items-center absolute">
    <img src="/Group.svg" alt="Group" className=" h-12 mr-2" />
    </div>
    <hr/>
  </header>
  )
}

export default Header
