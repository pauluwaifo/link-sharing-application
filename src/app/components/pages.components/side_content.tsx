"use client"

import { Skeleton } from "../svgs";
import AuthContext from "@/app/context/AuthContext";
import { AuthContextType } from "@/app/context/AuthContext";
import { useContext } from "react";
import "../utils/stringExtensions";

const SideContent = () => {
  const { userInfo } = useContext(AuthContext) as AuthContextType;

  return (
    <div className="basis-5/12 p-[32px] bg-white m-4 rounded-[12px] lg:flex md:hidden sm:hidden justify-center items-center">
      <div className="w-[250px] relative h-[513px] rounded-[40px] flex items-center justify-center overflow-hidden">
        <div className="absolute items-center flex flex-col">
          <div className="block bg-[#EEEEEE] w-[96px] h-[96px] rounded-full overflow-hidden">
            {userInfo?.url && (
              <img
                src={userInfo?.url}
                alt={userInfo.firstname}
                width={"100"}
                height={"100"}
              />
            )}
          </div>
          {userInfo?.firstname ? (
            <p className="text-[#333333] font-[600] text-[18px]">
              {userInfo?.firstname.toCamelCase()}{" "}
              {userInfo?.lastname.toCamelCase()}
            </p>
          ) : (
            <div className="block bg-[#EEEEEE] w-[120px] h-[12px] rounded-full mt-3"></div>
          )}
          {userInfo?.email ? (
            <p className="text-[#737373] font-[400] text-[14px]">
              {userInfo?.email}
            </p>
          ) : (
            <div className="block bg-[#EEEEEE] w-[70px] h-[8px] rounded-full mt-2"></div>
          )}

          <div className="mt-[24px]">
            <div className="block bg-[#EEEEEE] w-[190px] h-[34px] rounded-[8px] mt-3"></div>
            <div className="block bg-[#EEEEEE] w-[190px] h-[34px] rounded-[8px] mt-3"></div>
            <div className="block bg-[#EEEEEE] w-[190px] h-[34px] rounded-[8px] mt-3"></div>
            <div className="block bg-[#EEEEEE] w-[190px] h-[34px] rounded-[8px] mt-3"></div>
          </div>
        </div>
        <Skeleton />
      </div>
    </div>
  );
};

export default SideContent;
