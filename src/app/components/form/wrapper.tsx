import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string
}

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`${className}  relative focus-within:border-[#633CFF] focus-within:shadow-[0_0px_32px_0px_rgba(99,60,255,0.251)] border-[1px] border-[#D9D9D9] rounded-[8px] px-[16px] py-[12px] mt-[5px] flex flex-row items-center`}>
      {children}
    </div>
  );
};

export default Wrapper;
