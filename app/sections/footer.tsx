import React from "react";
const FooterSection = () => {
  return (
    <section className="relative w-full bg-[#FFD6E8]">
      <div className="absolute top-0 bg-white h-[100px] w-full rounded-b-[100%] z-50"></div>
      <div className="absolute top-[50px] h-[200px] w-full  bg-gradient-to-b bg-[#FFD6E8] z-0">
        <div className="mt-[130px] text-center text-sm text-white [font-size:_clamp(0.8rem,1vw,2rem)]">
          © All Rights Reserved By{" "}
          <span className="font-bold">Fatemeh Akhlaghi</span>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
