'use client'
import React from "react";
import Image from "next/image";

const renderReview = [
  {
    id: "1",
    name: "Jonathan",
    imgLink: "/Profile1.png",
    review:
      "I pop in here for a drink with my friends once in a while, great service!. Friendly staff who all speak English as well. The drinks are always good and baked goods are fresh. They open at 12pm and close at 2 am.",
    reviewTime: "2 Hours",
  },
  {
    id: "2",
    name: "Jonathan",
    imgLink: "/Profile1.png",
    review:
      "I pop in here for a drink with my friends once in a while, great service!. Friendly staff who all speak English as well. The drinks are always good and baked goods are fresh. They open at 12pm and close at 2 am.",
    reviewTime: "2 Hours",
  },
  {
    id: "3",
    name: "Jonathan",
    imgLink: "/Profile1.png",
    review:
      "I pop in here for a drink with my friends once in a while, great service!. Friendly staff who all speak English as well. The drinks are always good and baked goods are fresh. They open at 12pm and close at 2 am.",
    reviewTime: "2 Hours",
  },
  // Add more reviews as needed
];

function Review() {
  const [displayedReviews, setDisplayedReviews] = React.useState(2); // State to track the number of reviews to display

  const handleLoadMore = () => {
    setDisplayedReviews(renderReview.length); // Display all reviews when "Load More" is clicked
  };

  return (
    <>
      <div className="">
        <div className=" grid grid-cols-12">
          <div className="xl:col-span-8 lg:col-span-8 md:col-span-4 sm:col-span-12">
            <div className="border-b-2 border-[#EDEDED] bg-[#FFFFFF] flex p-3">
              <h1 className="text-[24px]">Reviews</h1>
              <h1 className="pl-10 text-[24px]">Recommendations</h1>
            </div>
            {renderReview.slice(0, displayedReviews).map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="border-2 border-[#EDEDED] bg-[#FFFFFF] mt-2 py-4 px-6 rounded-xl"
                >
                  <div className="flex">
                    <div className="w-[62px] h-auto">
                      <Image src={item.imgLink} width={64} height={64} />
                    </div>
                    <div className="pl-2">
                      <div className="pb-2 text-[#003DCA] text-[20px]">{item.name}</div>
                      <div className="text-[18px]">Posted on {item.reviewTime} ago</div>
                    </div>
                  </div>
                  <div className="pt-2 text-[20px]">{item.review}</div>
                </div>
              );
            })}
            {displayedReviews < renderReview.length && (
              <div
                className="w-full  text-center m-4 cursor-pointer"
                onClick={handleLoadMore}
              >
                <span className="text-[#003DCA] rounded-md p-2 bg-[#EFF2FF] text-[18px]">Load More</span>
              </div>
            )}
          </div>
          <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12">
            <div className="p-3">
              <div className="pb-3 pl-7">
                <h1 className="text-[24px]"> Write a Review </h1>
              </div>
              <div className="flex flex-col gap-4 w-[604px] p-7 sm:w-full">
                <input
                  placeholder="Your name"
                  className="border-2 border-[#D9D9D9] rounded-md h-[58px] pl-4 "
                />
                <input
                  placeholder="email id"
                  className="border-2 border-[#D9D9D9] rounded-md h-[58px] pl-4"
                />
                <input
                  placeholder="Your massage"
                  height={5}
                  className="border-2 border-[#D9D9D9] rounded-md h-[122px] pl-4"
                />
                <button type="submit" className="bg-blue-600 rounded-md h-[58px]">
                  <span className="text-white font-bold text-[24px]">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
