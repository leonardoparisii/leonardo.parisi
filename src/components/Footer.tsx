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
          customStyle="text-sm sm:text-md font-semibold text-slate-500"
        />
      </div>
      <div className="w-fit flex justify-end sm:p-5 gap-4">
        {socialsData.socials.map((social) => (
          <Link key={social.name} href={social.url} target="_blank">
            <div className="text-lg text-slate-400 hover:text-slate-700 transition-colors">
              <i className={`bi bi-${social.icon}`}></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
