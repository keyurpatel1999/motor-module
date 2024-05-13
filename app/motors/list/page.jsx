import Frame from "@/app/component/Frame";
import Image from "next/image";
import Motor from "@/app/component/Motor";

import Blog from "@/app/component/blog";
const arr = [
  {
    image: "/Rectangle 5529.png",
    name: "Figma ipsum component",
    days: 5,
    description:
      "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",

    location: "Abu Dhabi, UAE",
    reviewStars: 3,
    numberOfReviews: 45,
  },
  {
    image: "/Rectangle 5529.png",
    name: "Figma ipsum component",
    days: 5,
    description:
      "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",

    location: "Abu Dhabi, UAE",
    reviewStars: 3,
    numberOfReviews: 45,
  },
  {
    image: "/Rectangle 5529.png",
    name: "Figma ipsum component",
    days: 5,
    description:
      "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",

    location: "Abu Dhabi, UAE",
    reviewStars: 3,
    numberOfReviews: 45,
  },
  {
    image: "/Rectangle 5529.png",
    name: "Figma ipsum component",
    days: 5,
    description:
      "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",

    location: "Abu Dhabi, UAE",
    reviewStars: 3,
    numberOfReviews: 45,
  },
  {
    image: "/Rectangle 5529.png",
    name: "Figma ipsum component",
    days: 5,
    description:
      "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",

    location: "Abu Dhabi, UAE",
    reviewStars: 3,
    numberOfReviews: 45,
  },
];
const motorFilters = [
  {
    name: "Used Cars",
    quantity: 132,
  },
  {
    name: "Number Plates",
    quantity: 132,
  },
  {
    name: "Auto Accessories & Parts",
    quantity: 132,
  },
  {
    name: "Motor Cycles",
    quantity: 132,
  },
  {
    name: "Heavy Vehicles",
    quantity: 132,
  },
  {
    name: "Boats",
    quantity: 132,
  },
  {
    name: "Export Cars",
    quantity: 132,
  },
];

const whatIsNew = [
  {
    title: "<b>MJ Cars</b> is listed a 20 new cars and bikes",
    imageUrl: "/mj-car.png",
  },
  {
    title: "<b>Crystocab</b> is a listed a Hyundai branded used cars",
    imageUrl: "/crystocab.jpg",
  },
  {
    title: "<b>Dravien Desel</b> is a listed a Rehana branded used cars",
    imageUrl: "/dravien.jpg",
  },
  {
    title: "<b>Maximo Cars</b> is a listed a Maruthi Xylo branded used cars",
    imageUrl: "/maximo.jpg",
  },
];

const MotorListPage = () => {
  return (
    <div className="px-[100px] h-[calc(100vh-220px)] overflow-auto">
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
                alt="add"
              />
            </span>

            <span className="text-nowrap h-[40px] flex items-center gap-x-[10px] px-[10px] border-[#E6E6E6] border-solid border-[1px] rounded-[15px] text-[15px] font-medium text-black">
              My Live
              <Image
                className="cursor-pointer"
                src={"/add.svg"}
                width={20}
                height={20}
                alt="add"
              />
            </span>

            <span className="text-nowrap h-[40px] flex items-center gap-x-[10px] px-[10px] border-[#E6E6E6] border-solid border-[1px] rounded-[15px] text-[15px] font-medium text-black">
              My Stories
              <Image
                className="cursor-pointer"
                src={"/add.svg"}
                width={20}
                height={20}
                alt="add"
              />
            </span>

            <span className="text-nowrap h-[40px] flex items-center gap-x-[10px] px-[10px] border-[#E6E6E6] border-solid border-[1px] rounded-[15px] text-[15px] font-medium text-black">
              <Image
                className="cursor-pointer"
                src={"/map.svg"}
                width={20}
                height={20}
                alt="map"
              />
              <span>Map</span>
            </span>

            <div className="rounded-full bg-[#4B4CFF] w-[45px] h-[45px] flex justify-center items-center cursor-pointer">
              <Image
                className="cursor-pointer"
                src={"/column-wise.svg"}
                width={21}
                height={21}
                alt="column"
              />
            </div>

            <div className="rounded-full border-solid border-[1px] border-[#E6E6E6] w-[45px] h-[45px] flex justify-center items-center cursor-pointer">
              <Image
                className="cursor-pointer"
                src={"/bars.svg"}
                width={21}
                height={21}
                alt="bars"
              />
            </div>

            <div className="relative">
              <div className="absolute left-[15px] top-[53%] translate-y-[-50%]">
                <Image
                  className="cursor-pointer"
                  src={"/tri-up.svg"}
                  width={14}
                  height={12}
                  alt="tri-up"
                />
                <Image
                  className="absolute bottom-[-4px]"
                  src={"/tri-down.svg"}
                  width={14}
                  height={12}
                  alt="tri-down"
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

              <Image
                className=""
                src={"/slider.svg"}
                width={20}
                height={20}
                alt="slider"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-x-[20px]">
        {motorFilters.map((filter, index) => {
          return (
            <div
              key={index}
              className="px-[20px] h-[41px] flex items-center border-solid border-[1px] border-[#D9D9D9] rounded-[23px] cursor-pointer"
            >
              <div className="text-black text-[13px]">
                <span>{filter.name}</span>{" "}
                <span className="text-[#4B4CFF]">({filter.quantity})</span>
              </div>
            </div>
          );
        })}

        <div className="px-[20px] h-[41px] flex items-center border-solid border-[1px] border-[#D9D9D9] rounded-[23px] cursor-pointer">
          <div className="text-[#F800C0] text-[13px]">More</div>
        </div>
      </div>

    {/* cards  */}
  
      <div className="grid grid-cols-12 mt-5">
        <div className="flex flex-wrap gap-4 sm:col-span-12 md:col-span-8 lg:col-span-9">
          {arr.map((item, i) =>
            <Motor
            key={i + item.id}
              image={item.image}
              name={item.name}
              days={item.days}
              description={item.description}
              location={item.location}
              reviewStars={item.reviewStars}
              numberOfReviews={item.numberOfReviews}
            />
          )}

        </div>
        <div className="lg:col-span-3 sm:col-span-12 md:col-span-4">
          <div className="flex-col w-[400px] h-[228px] gap-y-[20px] ">
            <Image
              className="cursor-pointer"
              src={"/youtube-ad.png"}
              width={400}
              height={228}
              alt="Youtube Ad"
            />

            <Image
              className="cursor-pointer h-[482px]"
              src={"/signup-now.png"}
              width={400}
              height={482}
              alt="Signup Now"
            />

            <Image
              className="cursor-pointer h-[479px]"
              src={"/advertising.png"}
              width={400}
              height={479}
              alt="Advertising"
            />

            <div className="w-full flex flex-col gap-y-[20px] bg-[#F8F8F8] border-[1px] border-solid border-[#EDEDED] px-[12px] pt-[20px] pb-[10px] rounded-[19px]">
              <div className="text-[#4B4CFF] font-semibold text-[25px]">
                {`What's New`}
              </div>

              {whatIsNew.map((item, index) => {
                return (
                  <div className="flex gap-x-[12px] items-center" key={index}>
                    <Image
                      className="rounded-full"
                      src={item.imageUrl}
                      width={70}
                      height={70}
                      alt="MJ Cars"
                    />

                    <div
                      className="text-black text-[18px] leading-8"
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    ></div>
                  </div>
                );
              })}

              <button className="min-h-[56px] flex justify-between items-center border border-solid border-[#003DCA] pl-[25px] pr-[6px] rounded-[20px]">
                <div className="text-[21px]">View All</div>

                <button className="w-[68px] h-[44px] bg-[#4B4CFF] flex justify-center items-center rounded-[21px]">
                  <Image
                    className="cursor-pointer h-[44px]"
                    src={"/arrow-right.svg"}
                    width={21}
                    height={15}
                    alt="Advertising"
                  />
                </button>
              </button>
            </div>


          </div>

        </div>
      </div>
    
        <div className="bg-[#F2F3F5]">
          <div className="flex">
            <div>
              View all
            </div>
          </div>
          <div className="flex flex-wrap">
        {arr.map((item, i) =>
            <Motor
               key={item.id + i}
              image={item.image}
              name={item.name}
              days={item.days}
              description={item.description}
              location={item.location}
              reviewStars={item.reviewStars}
              numberOfReviews={item.numberOfReviews}
            />
          )}
        </div>
    
      </div>
      <div>
        <Frame />
      </div>
    

    </div>
    
  );
};

export default MotorListPage;
