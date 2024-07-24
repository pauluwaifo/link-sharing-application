import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`block cursor-pointer w-100 text-center px-[11px] py-[12px] h-[46px] rounded-[8px] ${className}`}
    >
      {children}
    </div>
  );
};
