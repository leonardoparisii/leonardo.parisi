"use client";
import data from "@/data/data.json";
import Link from "next/link";
import socialsData from "@/data/data.json";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const path = usePathname();
  const home = path === "/";
  console.log(path);

  useEffect(() => {
    setScroll(window.scrollY);

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  return (
    <header
      className={`fixed transition-all duration-300 w-full px-12 box-border flex items-center justify-center bg-[#f0f0f0]/90 z-50 ${
        scroll > 10 ? "py-5 border-dark/0" : "py-6 border border-dark/30"
      }`}
    >
      <div className="w-full flex justify-start">
        <Link
          href={{ pathname: "/" }}
          className="font-mulish text-xl max-sm:text-lg font-bold text-dark hover:text-orange transition-all duration-500 cursor-pointer"
        >
          Leonardo Parisi
        </Link>
      </div>
      <div className="flex justify-center gap-4 md:rounded-none rounded-full md:border-none border md:relative fixed md:bottom-0 bottom-16 md:p-0 md:px-0 py-2 px-3.5 border-slate-800 md:bg-transparent bg-white/20 md:backdrop-blur-none backdrop-blur-xl md:w-full w-fit">
        {!home && (
          <Link
            href={{ pathname: "/" }}
            className="text-dark hover:text-orange focus:text-orange transition-all duration-500 text-sm font-bold font-mulish cursor-pointer"
          >
            Home
          </Link>
        )}
        {data.navData.map((item, i) => (
          <>
            {!home ? (
              <div className="hidden" />
            ) : (
              <Link key={i} href={item.url}>
                <div
                  className="text-sm font-bold font-mulish text-dark hover:text-orange focus:text-orange transition-all duration-500"
                  translate="no"
                >
                  {item.text}
                </div>
              </Link>
            )}
          </>
        ))}
      </div>
      <div className="w-full max-md:w-fit flex justify-end gap-4">
        {socialsData.socials.map((social) => (
          <Link key={social.name} href={social.url} target="_blank">
            <div className="text-lg text-dark hover:text-orange focus:text-orange transition-all duration-500">
              <i className={`bi bi-${social.icon}`}></i>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
