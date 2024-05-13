/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

const StarRating = ({ ratingValue, numberOfReviews }) => {
  const fullStars = Math.floor(ratingValue);
  const isHalfStar = ratingValue % 1 !== 0;
  const stars = Array(1)
    .fill()
    .map((_, index) => {
      if (index < fullStars) {
        return (
          <span key={index} className="text-yellow-500">
            &#9733;
          </span>
        );
      } else if (index === fullStars && isHalfStar) {
        return (
          <span key={index} className="text-yellow-500">
            &#9734;
          </span>
        );
      } else {
        return (
          <span key={index} className="text-gray-500">
            &#9733;
          </span>
        );
      }
    });

  return (
    <div>
      {stars}
      <span className="font-bold text-[12px] pl-2 pr-1">{`${ratingValue}/5`}</span>
      <span className="text-[10px]"> ({numberOfReviews} ratings) </span>
    </div>
  );
};
const Blog = () => {
  const CardArray = [
    {
      image: "/beautyfulGirl1.png",
      name: "White House Apparels Pv..",
      description:
        "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",
      logo: "/logo2.svg",
      days: 5,
      locationLogo: "/location.png",
      GoogleLogo: "/Google.png",
      location: "Abu Dhabi, UAE",
      reviewStars: 3,
      numberOfReviews: 45,
    },
    {
      image: "/beautyfulGirl2.png",
      name: "White House Apparels Pv..",
      description:
        "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",
      logo: "/logo1.svg",
      days: 5,
      locationLogo: "/location.png",
      GoogleLogo: "/Google.png",
      location: "Abu Dhabi, UAE",
      reviewStars: 3,
      numberOfReviews: 45,
    },
    {
      image: "/beautyfulGirl3.png",
      name: "White House Apparels Pv..",
      description:
        "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",
      logo: "/logo3.svg",
      days: 5,
      locationLogo: "/location.png",
      GoogleLogo: "/Google.png",
      location: "Abu Dhabi, UAE",
      reviewStars: 3,
      numberOfReviews: 45,
    },
    {
      image: "/beautyfulGirl4.png",
      name: "White House Apparels Pv..",
      description:
        "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",
      logo: "/logo4.svg",
      days: 5,
      locationLogo: "/location.png",
      GoogleLogo: "/Google.png",
      location: "Abu Dhabi, UAE",
      reviewStars: 3,
      numberOfReviews: 45,
    },
    {
      image: "/beautyfulGirl5.png",
      name: "White House Apparels Pv..",
      description:
        "Antler is the investor backing the worlds most driven founders, from day zero to greatness.",
      logo: "/logo5.svg",
      days: 5,
      locationLogo: "/location.png",
      GoogleLogo: "/Google.png",
      location: "Abu Dhabi, UAE",
      reviewStars: 3,
      numberOfReviews: 45,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {CardArray.map((item, index) => (
          <div className="w-[321px] h-[400px] c-card" key={index}>
            <div className="">
              <Image
                className="h-[241px] w-[321px]"
                src={item?.image}
                alt="beautyfulGirl"
                width={321}
                height={241}
              />
            </div>
            <div className="border-[#EDEDED] border-2 rounded-b-2xl ">
              <div className="flex  border-b-2 ">
                <div className="flex w-full justify-between items-center p-2 border-[#EDEDED]">
                  <div className="w-[80%]">
                    <div className="font-bold text-[16px] pb-1">
                      {item?.name}
                    </div>
                    <div className=" text-[10px]">{item?.description}</div>
                  </div>
                  <div className="overflow-hidden rounded-full border-[#F800C0] border-2">
                    <Image
                      width={68}
                      height={68}
                      className=" h-[68px] w-[68px] p-[2px]"
                      src={item?.logo}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center h-[55px] px-3 border-[#EDEDED]">
                <div className="flex items-center gap-2">
                  <Image
                    src={item?.locationLogo}
                    className="h-[14px] w-[11px]"
                    width={14}
                    height={11}
                  />
                  <div className="font-bold text-[12px]"> {item.location}</div>
                </div>
                <div className="border-[1px] border-[#EDEDED] h-[30px] "></div>
                <div className="flex items-center gap-2">
                  <Image
                    src={item?.GoogleLogo}
                    className="h-[15px] w-[15px]"
                    width={15}
                    height={15}
                  />
                  <StarRating
                    ratingValue={item.reviewStars}
                    numberOfReviews={item.numberOfReviews}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
