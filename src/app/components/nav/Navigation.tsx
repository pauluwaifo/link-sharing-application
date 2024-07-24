"use client";

import Link from "next/link";
import { EyeSvg, LinkSvg, Logo, LogoFavicon, ProfileSvg } from "../svgs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  const [homeView, setHomeView] = useState<boolean>(false);
  const [profileView, setProfileView] = useState<boolean>(false);

  // handle links
  useEffect(() => {
    if (path === "/") {
      setHomeView(true);
    } else {
      setHomeView(false);
    }
    if (path === "/profile") {
      setProfileView(true);
    } else {
      setProfileView(false);
    }
  }, [path]);
  
  return (
    <div className="h-[78px] rounded-[12px] p-[16px] flex flex-row m-[8px] bg-white items-center">

      <div className="lg:basis-7/12 md:basis-9/12 sm:basis-9/12 flex flex-row md:justify-between lg:justify-between sm:justify-around items-center">
        {/* large screen logo */}
        <div className="sm:hidden lg:block md:block">
          <Logo width="146" height="32" />
        </div>
        <div className="sm:block lg:hidden md:hidden">
          <LogoFavicon />
        </div>
        <div className="flex flex-row mx-[10px]">
          {/* link */}
          <Link
            className={`inline-block flex group flex-row items-center py-[11px] px-[27px] font-[600] text-[16px] leading-[24px] rounded-[8px] mx-[2px] hover:bg-[#EFEBFF] hover:text-[#633CFF] justify-center ${
              homeView ? "bg-[#EFEBFF] text-[#633CFF] " : "text-[#737373]"
            }`}
            href={"/"}
          >
            <LinkSvg
              className={`md:mr-2 lg:mr-2 group-hover:fill-[#633CFF] ${
                homeView && "fill-[#633CFF]"
              }`}
            />
            <span className={"sm:hidden lg:block md:block"}>Links</span>
          </Link>
          {/* profile */}
          <Link
            className={`group inline-block flex flex-row items-center py-[11px] px-[27px] font-[600] text-[16px] leading-[24px] rounded-[8px] mx-[2px] hover:bg-[#EFEBFF] hover:text-[#633CFF] justify-center ${
              profileView
                ? "bg-[#EFEBFF] text-[#633CFF] "
                : "text-[#737373] focus-within:fill-[#633CFF]"
            }`}
            href={"/profile"}
          >
            <ProfileSvg
              className={`md:mr-2 lg:mr-2 group-hover:fill-[#633CFF] ${
                profileView && "fill-[#633CFF]"
              }`}
            />
            <span className={"sm:hidden lg:block md:block"}>
              Profile details
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:basis-5/12 md:basis-3/12 sm:basis-3/12 flex flex-row justify-end items-center">
        {/* link */}
        <Link
          className={`inline-block flex group flex-row items-center py-[11px] px-[27px] font-[600] text-[16px] leading-[24px] rounded-[8px] mx-[2px] text-[#633CFF] border border-[#633CFF] justify-center`}
          href={"/"}
        >
         <span className="sm:hidden md:block lg:block">Preview</span> 
         <EyeSvg className="sm:block lg:hidden md:hidden"/>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
