import { Skeleton } from "../svgs";

const SideContent = () => {
  return (
    <div className="basis-5/12 p-[32px] bg-white m-4 rounded-[12px] lg:flex md:hidden sm:hidden justify-center items-center">
      <div className="w-[250px] relative h-[513px] rounded-[40px] flex items-center justify-center overflow-hidden">
        <div className="absolute items-center flex flex-col">
          <div className="block bg-[#EEEEEE] w-[96px] h-[96px] rounded-full"></div>
          <div className="block bg-[#EEEEEE] w-[120px] h-[12px] rounded-full mt-3"></div>
          <div className="block bg-[#EEEEEE] w-[70px] h-[8px] rounded-full mt-2"></div>

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
