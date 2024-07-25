"use client";

import React, { useState, useEffect } from "react";
import { Img } from "../../svgs";

interface Props {
  setFile?: (file: File | null) => void;
}

const ImageUpload: React.FC<Props> = ({ setFile }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Clean up the object URL if it exists
    if (imageSrc) {
      return () => URL.revokeObjectURL(imageSrc);
    }
  }, [imageSrc]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // Check if file exists
    if (file) {
      // Check file type
      if (!file.type.match("image/png") && !file.type.match("image/jpeg")) {
        setErrorMessage("Only PNG and JPG images are allowed.");
        return;
      }

      // Set file state if defined
      setFile && setFile(file);

      const img = new Image();
      const url = URL.createObjectURL(file);

      img.src = url;
      img.onload = () => {
        if (img.width > 1024 || img.height > 1024) {
          setErrorMessage("Image must be below 1024x1024px.");
          URL.revokeObjectURL(url); // Clean up URL object
          return;
        }

        setImageSrc(url);
        setErrorMessage(null);
      };

      img.onerror = () => {
        setErrorMessage("Failed to load image.");
        URL.revokeObjectURL(url); // Clean up URL object
      };
    } else {
      setErrorMessage("No file selected.");
    }
  };

  return (
    <div>
      <div className="flex flex-col group relative overflow-hidden sm:w-[193px] md:w-full items-center justify-center h-[193px] bg-[#EFEBFF] rounded-[12px]">
        <button
          type="button"
          className={`ease-in duration-300 items-center w-full h-full leading-[4] justify-center flex flex-col text-[#633CFF] ${
            imageSrc &&
            "group-hover:text-white group-hover:z-10 group-hover:bg-[rgba(0,0,0,0.5)]"
          }`}
        >
          <Img className={`${imageSrc && "group-hover:fill-white"}`} />
          {imageSrc ? "Change Image" : "+ Upload Image"}
        </button>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageUpload}
          className="absolute top-0 left-0 w-full h-full cursor-pointer z-10 border opacity-0"
        />
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Preview"
            className="w-full h-full absolute object-cover"
          />
        )}
      </div>
      {errorMessage && (
        <p className="text-[12px] text-center" style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
