"use client";
import Link from "next/link";
import socialsData from "@/data/data.json";
import Text from "./ui/Text";

const Footer = () => {
  return (
    <div className="flex justify-between px-6 sm:px-10 py-4 w-full mt-18">
      <div className="w-fit flex items-center">
        <Text
          text="Copyright © 2023. All rights reserved"
          customStyle="text-sm sm:text-md font-bold text-dark"
        />
      </div>
      <div className="w-fit flex justify-end gap-4">
        {socialsData.socials.map((social) => (
          <Link key={social.name} href={social.url} target="_blank">
            <div className="text-lg text-dark hover:text-orange transition-all duration-500">
              <i className={`bi bi-${social.icon}`}></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
