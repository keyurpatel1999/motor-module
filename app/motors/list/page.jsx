import Image from "next/image";

const MotorListPage = () => {
  return (
    <div className="px-[100px]">
      <div className="py-[30px]">
        <div className="flex justify-between">
          <div className="text-[34px]">Find Motors (2684)</div>
          <div className="flex items-center gap-x-[13px]">
            <span className="text-nowrap h-[40px] flex items-center gap-x-[10px] px-[10px] border-[#E6E6E6] border-solid border-[1px] rounded-[15px] text-[15px] font-medium text-black">
              My Community
              <Image
                className="cursor-pointer"
                src={"/add.svg"}
                width={20}
                height={20}
              />
            </span>

            <span className="text-nowrap h-[40px] flex items-center gap-x-[10px] px-[10px] border-[#E6E6E6] border-solid border-[1px] rounded-[15px] text-[15px] font-medium text-black">
              My Live
              <Image
                className="cursor-pointer"
                src={"/add.svg"}
                width={20}
                height={20}
              />
            </span>

            <span className="text-nowrap h-[40px] flex items-center gap-x-[10px] px-[10px] border-[#E6E6E6] border-solid border-[1px] rounded-[15px] text-[15px] font-medium text-black">
              My Stories
              <Image
                className="cursor-pointer"
                src={"/add.svg"}
                width={20}
                height={20}
              />
            </span>

            <span className="text-nowrap h-[40px] flex items-center gap-x-[10px] px-[10px] border-[#E6E6E6] border-solid border-[1px] rounded-[15px] text-[15px] font-medium text-black">
              <Image
                className="cursor-pointer"
                src={"/map.svg"}
                width={20}
                height={20}
              />
              <span>Map</span>
            </span>

            <div className="rounded-full bg-[#4B4CFF] w-[45px] h-[45px] flex justify-center items-center cursor-pointer">
              <Image
                className="cursor-pointer"
                src={"/column-wise.svg"}
                width={21}
                height={21}
              />
            </div>

            <div className="rounded-full border-solid border-[1px] border-[#E6E6E6] w-[45px] h-[45px] flex justify-center items-center cursor-pointer">
              <Image
                className="cursor-pointer"
                src={"/bars.svg"}
                width={21}
                height={21}
              />
            </div>

            <div className="relative">
              <div className="absolute left-[15px] top-[53%] translate-y-[-50%]">
                <Image
                  className="cursor-pointer"
                  src={"/tri-up.svg"}
                  width={14}
                  height={12}
                />
                <Image
                  className="absolute bottom-[-4px]"
                  src={"/tri-down.svg"}
                  width={14}
                  height={12}
                />
              </div>
              <select
                id="location"
                name="location"
                className="h-[45px] rounded-[23px] border-solid border-[1px] border-[#F800C0] flex items-center pl-[38px] pr-[10px] mt-2 w-full text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="Sort default"
              >
                <option>Brand</option>
              </select>
            </div>

            <button className="flex justify-between items-center h-[45px] bg-[#4B4CFF] text-white text-[15px] gap-x-[15px] pl-[15px] pr-[20px] rounded-[23px]">
              <div>Filters</div>

              <Image className="" src={"/slider.svg"} width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="px-[20px] h-[41px] flex items-center border-solid border-[1px] border-[#D9D9D9] rounded-[23px] cursor-pointer">
          <div className="text-black text-[13px]">
            Used Cars <span className="text-[#4B4CFF]">(132)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorListPage;
