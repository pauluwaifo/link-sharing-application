"use client";

import { useContext } from "react";
import { Button } from "../../../button";
import AddedElement from "./added_elements";
import Welcome from "./welcome_img";
import ElementContext, {
  ElementContextType,
} from "@/app/context/ElementContext";

const MainContent = () => {
  const { elements, addNewElement } = useContext(
    ElementContext
  ) as ElementContextType;

  return (
    <div className="lg:basis-7/12 md:basis-full sm:basis-full flex-wrap lg:overflow-auto md:overflow-auto sm:overflow-hidden bg-white m-4 rounded-[12px] flex flex-col items-center md:p-[40px] lg:p-[40px] sm:p-[24px]">
      {/* heading */}
      <section className="text-left w-full">
        <h1 className="font-[700] md:text-[32px] lg:text-[32px] sm:text-[24px] leading-[48px] text-[#333333] m-0 p-0">
          Customize your links
        </h1>
        <p className="text-[#737373] font-[400] text-[16px] leading-[28px] m-0 p-0">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </section>

      {/* content */}
      <section className="mt-[24px] w-full">
        {/* sec 1 */}
        <Button
          onClick={addNewElement}
          className="hover:bg-[#EFEBFF] border border-[#633CFF] w-full text-[#633CFF]"
        >
          + Add new link
        </Button>

        {/* link list */}
        {/* sec 2 */}
        <div className="max-h-[500px] overflow-auto scrollbar-thumb-sky-700 scrollbar-track-sky-300">
          {elements && elements.length > 0 ? <AddedElement /> : <Welcome />}
        </div>

        {/* button sec-3 */}
        <div className="mt-6 flex items-center justify-end">
          <Button className="text-white bg-[#633CFF] sm:w-full md:w-[91px] lg:w-[91px] px-[27px] py-[11px]">
            Save
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
