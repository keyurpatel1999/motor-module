import React from "react";
import Image from "next/image";

const StarRating = ({ ratingValue, numberOfReviews }) => {
  const fullStars = Math.floor(ratingValue);
  const isHalfStar = ratingValue % 1 !== 0;
  const stars = Array(5)
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
const Motor = ({image, name,days , description, location, reviewStars, numberOfReviews }) => {
 

  return (
    <>
     
          <div className="w-[407px] h-auto c-card ">
            <div className="pb-[15rem] ">
              <div className="relative">
                <Image
                  className="absolute h-auto w-[407px]"
                  src={`${image}`}
                  alt=""
                  width={407}
                  height={0}
                />
                <Image
                  className="absolute h-[25px] w-[28px] top-5 right-3 "
                  src="/like.png"
                  alt="like"
                  width={0}
                  height={0}
                />
                <div className=" absolute object-cover text-[#fff] text-[16px] top-52 left-3">
                  {days} days ago
                </div>
              </div>
            </div>
            <div className="border-[#EDEDED] border-2 rounded-b-2xl">
              <div className="flex w-full justify-between items-center p-2 border-[#EDEDED] border-b-2">
                <div className="w-[80%]">
                  <div className="font-bold text-[20px] pb-1">
                    {name}
                  </div>
                  <div className=" text-[10px]">
                   {description}
                  </div>
                </div>
                <div className=" rounded-full border-[#F800C0] border-2">
                  <Image
                    width={68}
                    height={68}
                    className=" h-[68px] w-[68px] p-[2px]"
                    src="/Ellipse 1016.png"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center h-[55px] px-3 border-[#EDEDED] border-b-2 ">
                <div className="flex items-center gap-2">
                  <Image
                    src="/location.png"
                    className="h-[14px] w-[11px]"
                    width={0}
                    height={0}
                  />
                  <div className="font-bold text-[12px]"> {location}</div>
                </div>
                <div className="border-[1px] border-[#EDEDED] h-[30px] "></div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/Google.png"
                    className="h-[15px] w-[15px]"
                    width={0}
                    height={0}
                  />
                  <StarRating
                    ratingValue={reviewStars}
                    numberOfReviews={numberOfReviews}
                  />
                </div>
              </div>
              <div class="flex items-center h-[40px] w-full border-[#EDEDED] border-b-2 mb-1 py-5 ">
                <div className="flex items-center gap-3 w-[33.33%]">
                  <div className="w-[20%] flex justify-end ">
                    <Image
                      src="/MyListing.png"
                      className=" w-[14px] h-[14px]"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="text-[12px] font-bold w-[80%] ">
                    MyListing
                  </div>
                </div>
                <div className="border-[1px] border-[#EDEDED] h-[30px] "></div>
                <div className="flex items-center gap-3 w-[33.33%] ">
                  <div className="w-[20%] flex justify-end ">
                    <Image
                      src="/MyVideo.png"
                      className=" w-[14px] h-[14px]"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="text-[12px] font-bold w-[80%] ">MyVideo</div>
                </div>
                <div className="border-[1px] border-[#EDEDED] h-[30px] "></div>
                <div className="flex items-center justify-center gap-3 w-[33.33%]">
                  <div className="w-[20%] flex justify-end ">
                    <Image
                      src="/MyCommunity.png"
                      className=" w-[14px] h-[14px]"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="text-[12px] font-bold w-[80%] ">
                    MyCommunity
                  </div>
                </div>
              </div>
              <div class="flex items-center h-[40px] w-full mb-4">
                <div className="flex items-center gap-3 w-[33.33%]">
                  <div className="w-[20%] flex justify-end ">
                    <Image
                      src="/Fredo.png"
                      className=" w-[14px] h-[14px]"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="text-[12px] font-bold w-[80%] ">Fredo</div>
                </div>
                <div className="border-[1px] border-[#EDEDED] h-[30px] "></div>
                <div className="flex items-center gap-3 w-[33.33%] ">
                  <div className="w-[20%] flex justify-end ">
                    <Image
                      src="/Book an Agent.png"
                      className=" w-[14px] h-[14px]"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="text-[12px] font-bold w-[80%] ">
                    Book an Agent
                  </div>
                </div>
                <div className="border-[1px] border-[#EDEDED] h-[30px] "></div>
                <div className="flex items-center justify-center gap-3 w-[33.33%]">
                  <div className="w-[20%] flex justify-end ">
                    <Image
                      src="/Interaction.png"
                      className=" w-[14px] h-[14px]"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="text-[12px] font-bold w-[80%] ">Share</div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  );
};

export default Motor;
