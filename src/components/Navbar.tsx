"use client";
import data from "@/data/data.json";
import Link from "next/link";
import socialsData from "@/data/data.json";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const home = path === "/";
  console.log(path);

  return (
    <div className="w-full py-3 sm:py-4 px-6 box-border flex items-center justify-center">
      <div className="w-full flex justify-start">
        <Link
          href="/"
          className="font-source text-xl md:text-2xl font-bold text-white cursor-pointer"
        >
          Leonardo Parisi
        </Link>
      </div>
      <div className="z-50 flex justify-center gap-4 md:rounded-none rounded-full md:border-none border md:relative fixed md:bottom-0 bottom-16 md:p-0 md:px-0 p-2 px-4 border-slate-800 md:bg-transparent bg-slate-800/70 md:backdrop-blur-none backdrop-blur-3xl md:w-full w-fit">
        {!home && (
          <Link
            href="/"
            className="hover:text-white focus:text-white text-sm font-semibold font-mulish text-slate-300/70 transition-colors cursor-pointer"
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
                  className="hover:text-white focus:text-white text-md font-semibold font-mulish text-slate-300/70 transition-colors"
                  translate="no"
                >
                  {item.text}
                </div>
              </Link>
            )}
          </>
        ))}
      </div>
      <div className="w-full flex justify-end p-5 gap-4">
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

export default Navbar;
