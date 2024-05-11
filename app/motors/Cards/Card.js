"use client"
import React, { useState } from 'react'

const Card = () => {
    let [isActive, setIsActive] = useState(false);

  return (
    <div
      class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
      style={{  margin: "50px" }}
    >
      <div
        class="relative overflow-hidden text-white bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40 w-96"
        style={{ height: "250px" }}
      >
        <img
          src="/Rectangle 4311.svg"
          width={"100%"}
          alt="card-image"
          style={{ height: "100%", borderRadius: "14px 14px 0 0px" ,objectFit: "cover" }}
        />

<img 
  onClick={() => setIsActive(prevState => !prevState)} 
  className={`absolute top-2 right-4 ${isActive ? 'w-8 h-8' : 'w-6 h-6'} text-red-500`} 
  src={isActive ? "/redheart.png" : "/emptyheart.png"} 
  alt="heart icon" 
/>
       
      </div>

      <div class="p-6">
        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          UI/UX Review Check
        </h5>
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to Naviglio where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
    </div>
  );
}

export default Card
