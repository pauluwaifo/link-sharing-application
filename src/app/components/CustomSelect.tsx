import React, { useState } from "react";
import { AngleDown, AngleUp } from "./svgs";
import {
  PiGithubLogoFill,
  PiYoutubeLogoFill,
  PiLinkedinLogoFill,
  PiFacebookLogoFill,
  PiWhatsappLogoFill,
} from "react-icons/pi";

interface Option {
  value: string;
  label: React.ReactNode;
}

const options: Option[] = [
  {
    value: "Github",
    label: (
      <div
        className={`flex flex-row items-center text-[16px] text-[#333333] group-hover:text-[#633CFF]`}
      >
        <PiGithubLogoFill
          className={`basis-10 mx-[5px] group-hover:fill-[#633CFF] fill-[#737373]`}
        />{" "}
        GitHub
      </div>
    ),
  },
  {
    value: "Youtube",
    label: (
      <div className="flex flex-row items-center text-[16px] text-[#333333] group-hover:text-[#633CFF]">
        <PiYoutubeLogoFill className="basis-10 mx-[5px] group-hover:fill-[#633CFF] fill-[#737373]" />{" "}
        YouTube
      </div>
    ),
  },
  {
    value: "LinkedIn",
    label: (
      <div className="flex flex-row items-center text-[16px] text-[#333333] group-hover:text-[#633CFF]">
        <PiLinkedinLogoFill className="basis-10 mx-[5px] group-hover:fill-[#633CFF] fill-[#737373]" />{" "}
        LinkedIn
      </div>
    ),
  },
  {
    value: "Facebook",
    label: (
      <div className="flex flex-row items-center text-[16px] text-[#333333] group-hover:text-[#633CFF]">
        <PiFacebookLogoFill className="basis-10 mx-[5px] group-hover:fill-[#633CFF] fill-[#737373]" />{" "}
        Facebook
      </div>
    ),
  },
  {
    value: "Whatsapp",
    label: (
      <div className="flex flex-row items-center text-[16px] text-[#333333] group-hover:text-[#633CFF]">
        <PiWhatsappLogoFill className="basis-10 mx-[5px] group-hover:fill-[#633CFF] fill-[#737373]" />{" "}
        Whatsapp
      </div>
    ),
  },
];

const CustomSelect: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default button behavior
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-row justify-between w-full">
      {/* icon */}
      <button
        className="w-full border-none outline-none bg-transparent flex items-center justify-between"
        onClick={handleButtonClick}
      >
        {options.find((option) => option.value === selectedValue)?.label}
        <span className="ml-2">
          {isOpen ? (
            <AngleUp stroke="#633CFF" />
          ) : (
            <AngleDown stroke="#633CFF" />
          )}
        </span>
      </button>

      {/* content */}
      {isOpen && (
        <div className="absolute left-[-15px] w-[560px] bg-white overflow-hidden mt-10 px-[16px] py-[5px] shadow-lg rounded-[8px] border border-[#D9D9D9]">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 bg-transparent group cursor-pointer mt-1 border-b flex items-center"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
