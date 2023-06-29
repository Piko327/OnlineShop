import MotionProvider from "@/providers/motionProvider";
import React from "react";

const page = () => {
  return (
    <MotionProvider>
    <div className="px-10  md:px-20  text-gray-800 min-h-[60vh] p-5">
      <h2 className="text-2xl font-semibold text-gray-900 m-5 ">Welcome to T-Shop!</h2>
     <div className=" mt-10 text-xl flex flex-col gap-10 "> <span >
        At T-Shop, we are passionate about providing you with the finest
        selection of trendy and high-quality T-shirts. We believe that your
        wardrobe should reflect your unique personality and style, and what
        better way to express yourself than through our diverse range of T-shirt
        designs?
      </span>
      <span>
        Our journey began with a simple idea: to offer a one-stop destination
        for fashion-forward individuals who value comfort, style, and
        exceptional craftsmanship. With a team of dedicated designers and
        fashion enthusiasts, we curate a collection of T-shirts that caters to
        every taste and preference.{" "}
      </span>
      <span>
        We take great pride in the quality of our products. Each T-shirt at
        T-Shop is meticulously crafted using premium fabrics, ensuring a soft,
        comfortable feel against your skin. We understand that details matter,
        which is why we pay close attention to every stitch, ensuring durability
        and longevity in every garment.
      </span>
      </div>
      </div>
      
      
    
    
    </MotionProvider>
  );
};

export default page;
