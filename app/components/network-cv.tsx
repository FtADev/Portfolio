import React from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

const NetworkCV = () => {
  const socialNetworks = [
    {
      url: "mailto:akhlaghi.fatemeh@gmail.com",
      icon: <Mail size={30}/>,
    },
    {
      url: "https://linkedin.com/in/fatemeh-akhlaghi",
      icon: <Linkedin size={30}/>,
    },
    {
      url: "https://github.com/ftadev",
      icon: <Github size={30} />,
    },
    {
      url: "https://t.me/ftadev",
      icon: <Send size={30}/>,
    },
  ];

  return (
      <div className="flex mx-auto gap-8">
        {socialNetworks.map((item, index) => (
          <Link key={index} href={item.url} className="text-bgPink hover:scale-125 transition-all duration-150">
            {item.icon}
          </Link>
        ))}
      </div>
  
  );
};

export default NetworkCV;
