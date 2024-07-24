const PhoneView = () => {
  return (
    <div className="md:bg-white w-[300px] h-[500px] z-10 md:shadow-[0px_0px_32px_0px_rgba(0,0,0,0.102)] absolute rounded-[24px] p-10 items-center justify-center">
      <div className=" items-center flex flex-col">
        <div className="block bg-[#EEEEEE] md:w-[96px] md:h-[96px] sm:w-[140px] sm:h-[140px] rounded-full"></div>
        <div className="block bg-[#EEEEEE] w-[120px] h-[12px] rounded-full mt-3"></div>
        <div className="block bg-[#EEEEEE] w-[70px] h-[8px] rounded-full mt-2"></div>

        <div className="mt-[24px]">
          <div className="block bg-[#EEEEEE] sm:w-[250px] md:w-[190px] sm:h-[54px] md:h-[30px] rounded-[8px] mt-3"></div>
          <div className="block bg-[#EEEEEE] sm:w-[250px] md:w-[190px] sm:h-[54px] md:h-[30px] rounded-[8px] md:mt-3 sm:mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
