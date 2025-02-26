import React from "react";

interface SocialProps {
  url: string;
  icon: string;
}

const SocialComponent = ({ url, icon }: SocialProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-bgPink w-5 h-5 rounded-full"></div>
      <span className="text-black text-sm">{url}</span>
    </div>
  );
};

export default SocialComponent;
