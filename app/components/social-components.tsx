import React from "react";

interface SocialProps {
  url: string;
  icon: string;
}

const SocialComponent = ({ url, icon }: SocialProps) => {
  return (
    <div className="flex items-center">
      <div className="bg-bgPink w-10 h-10 rounded-full"></div>
      <span className="text-black text-sm"></span>
    </div>
  );
};

export default SocialComponent;
