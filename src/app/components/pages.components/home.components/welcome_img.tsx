import { HandOnPhone } from "../../svgs";

{
  /* lets get you started */
}
function Welcome() {
  return (
    <div
      className="flex flex-col items-center justify-center md:p-[60px] lg:p-[60px] bg-[#FAFAFA] text-center w-full flex flex-col items-center justify-center 
        mt-[12px] rounded-[12px] sm:p-[20px]"
    >
      {/* img */}
      <HandOnPhone className="sm:w-[124.77px] sm:h-[80px] md:w-[250px] md:h-[161px]" />
      {/* heading */}
      <div className="mt-6">
        <h2 className="text-[#333333] leading-[48px] sm:text-[24px] lg:text-[32px] md:text-[32px] font-[700]">
          Let’s get you started
        </h2>
        <p className="text-[#737373] font-[400] text-[16px] leading-[24px]">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
}

export default Welcome;
