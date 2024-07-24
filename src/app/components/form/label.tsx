import React, { ReactNode } from "react";

interface Props {
  htmlFor?: string;
  children: ReactNode
}

export const Label: React.FC<Props> = ({children}) => {
  return (
    <label className="leading-[18px] font-[400] text-[#333333]" htmlFor="Email">
      {children}
    </label>
  );
};
