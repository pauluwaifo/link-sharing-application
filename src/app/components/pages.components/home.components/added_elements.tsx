"use client";

import React, { useContext, useState } from "react";

import ElementContext, {
  ElementContextType,
} from "@/app/context/ElementContext";
import { LinkSvg, Menu2x } from "@/app/components/svgs";
import { Label } from "@/app/components/form/label";
import Wrapper from "@/app/components/form/wrapper";
import Input from "@/app/components/form/Input";
import CustomSelect from "@/app/components/CustomSelect";

const AddedElement: React.FC = () => {
  const { elements, deleteElement } = useContext(
    ElementContext
  ) as ElementContextType;

  const [platform, setPlatform] = useState<string>("");

  return (
    <div className="w-full scrollbar-thin ">
      {elements?.map((element) => (
        <div
          className="flex flex-col w-full bg-[#FAFAFA] text-center w-full flex flex-col items-center justify-center mt-[12px] rounded-[12px] sm:p-[20px]"
          key={element.id}
        >
          <div className="flex flex-row justify-between items-center w-full text-[#737373]">
            <p className="font-[700] text-[16px] flex items-center justify-center">
              <Menu2x className="mr-[2px]" />
              Link #{element.id + 1}
            </p>
            <button
              onClick={() => deleteElement && deleteElement(element.id)}
              className="font-[400] text-[16px]"
            >
              Remove
            </button>
          </div>

          <form className="mt-[24px] w-full text-left">
            {/* platform */}
            <div>
              <Label htmlFor="Platform">Platform</Label>
              <Wrapper>
                <CustomSelect />
              </Wrapper>
            </div>
            {/* link */}
            <div className="mt-[12px]">
              <Label htmlFor="Link">Link</Label>
              <Wrapper>
                <LinkSvg className="basis-10 w-" />
                <Input
                  type="url"
                  name="Link"
                  id="Link"
                  placeholder="e.g. https://www.youtube.com/benwright"
                  pattern="http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?"
                  required
                />
              </Wrapper>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AddedElement;
