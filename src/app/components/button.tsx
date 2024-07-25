import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={`block cursor-pointer text-center px-[11px] py-[12px] h-[46px] rounded-[8px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
