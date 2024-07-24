"use client";

import React, { useState, ReactNode } from "react";
import ElementContext from "./ElementContext";

export interface ElementData {
  id: number;
  platform: string;
  link: string;
}

export const ElementProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [elements, setElements] = useState<ElementData[]>([]);

  const addNewElement = () => {
    const newElement: ElementData = {
      id: elements.length,
      platform: `New Element ${elements.length + 1}`,
      link: "some link",
    };
    setElements([...elements, newElement]);
  };

  const deleteElement = (id: number) => {
    const filteredElements = elements.filter((element) => element.id !== id);
    setElements(filteredElements);
  };

  return (
    <ElementContext.Provider value={{ elements, addNewElement, deleteElement }}>
      {children}
    </ElementContext.Provider>
  );
};
