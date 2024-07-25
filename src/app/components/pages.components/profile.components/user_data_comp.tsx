// user data component
"use client";

import Input from "../../form/Input";
import Wrapper from "../../form/wrapper";
import ImageUpload from "./image_upload";
import { Button } from "../../button";
import { useState, useContext, useEffect } from "react";
import AuthContext from "@/app/context/AuthContext";
import { AuthContextType } from "@/app/context/AuthContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { db, storage } from "@/app/firebase/clientApp";

interface UserType {
  email: string;
  firstname: string;
  lastname: string;
}
interface FormErrors {
  email?: string;
  firstname?: string;
  lastname?: string;
}

const initialUser: UserType = {
  email: "",
  firstname: "",
  lastname: "",
};

const UserDataComponent = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);
  const [data, setData] = useState<UserType>(initialUser);
  const [errors, setErrors] = useState<FormErrors>({});
  const userEmail = String(user && user.email);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      email: userEmail,
    }));
  }, [userEmail]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (!data.email) {
      newErrors.email = "Can't be empty";
    }
    if (data.firstname === "") {
      newErrors.firstname = "Can't be empty";
    }
    if (data.lastname === "") {
      newErrors.lastname = "Can't be empty";
    }
    return newErrors;
  };

  const handleUpload = async () => {
    console.log("called")
    if (!user) return;

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setUploading(true);

    try {
      let url = null

      if (file) {
        const storageRef = ref(storage, `documents/${file.name}`);
        console.log("Uploading file to:", storageRef.fullPath);

        await uploadBytes(storageRef, file);
        console.log("File uploaded successfully");

         url = await getDownloadURL(storageRef);
        console.log("File URL:", url);

        setDownloadURL(url);
      }

      // Add user data (with or without file URL) to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstname: data.firstname,
        lastname: data.lastname,
        email: userEmail,
        url: url,
        timestamp: new Date(),
      });


    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* image */}
      <section className="flex md:flex-row sm:flex-col flex-wrap justify-between p-[20px] md:items-center bg-[#FAFAFA] w-full mt-[12px] rounded-[12px] ">
        <div className="text-[#737373] font-[400] text-[16px] basis-3/12 py-[12px]">
          Profile picture
        </div>

        <section className="basis-4/12 md:p-2 sm:p-0 ">
          <ImageUpload setFile={setFile} />
        </section>

        <div className="text-[#737373] font-[400] text-[12px] basis-5/12 py-[12px]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </div>
      </section>

      {/* form */}
      <section className=" justify-between p-[20px] items-center bg-[#FAFAFA] w-full mt-[18px] rounded-[12px]  ">
        <form className="flex-col flex flex-wrap">
          {/* first name */}
          <div className="flex flex-row flex-wrap items-center w-full">
            <div className="basis-4/12 ">
              <label
                htmlFor="firstname"
                className="font-[400] text-[16px] text-[#737373]"
              >
                First name<sup>*</sup>
              </label>
            </div>
            <div className="basis-8/12">
              <Wrapper className="w-full">
                <Input
                  placeholder="e.g. John"
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                />
                {errors.firstname && (
                  <div className="text-[#FF3939] basis-48  left-0 text-[12px] text-right">
                    {errors.firstname}
                  </div>
                )}
              </Wrapper>
            </div>
          </div>
          {/* last name */}
          <div className="flex flex-row flex-wrap items-center w-full mt-[16px]">
            <div className="basis-4/12 ">
              <label
                htmlFor="lastname"
                className="font-[400] text-[16px] text-[#737373]"
              >
                Last name<sup>*</sup>
              </label>
            </div>
            <div className="basis-8/12">
              <Wrapper className="w-full">
                <Input
                  placeholder="e.g. Dominic"
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                />
                {errors.lastname && (
                  <div className="text-[#FF3939] basis-48  left-0 text-[12px] text-right">
                    {errors.lastname}
                  </div>
                )}
              </Wrapper>
            </div>
          </div>
          {/* email */}
          <div className="flex flex-row flex-wrap items-center w-full mt-[16px]">
            <div className="basis-4/12 ">
              <label
                htmlFor="email"
                className="font-[400] text-[16px] text-[#737373]"
              >
                Email
              </label>
            </div>
            <div className="basis-8/12">
              <Wrapper className="w-full">
                <Input
                  placeholder="e.g. email@example.com"
                  type="email"
                  id="email"
                  name="email"
                  value={(user && data.email) || ""}
                />
              </Wrapper>
            </div>
          </div>
        </form>
      </section>

      {/* button */}
      <section className="border-t mt-[80px] flex items-center justify-end py-[20px]">
        <Button
          onClick={handleUpload}
          type="button"
          className="text-white bg-[#633CFF] sm:w-full md:w-[91px] lg:w-[91px] px-[27px] py-[11px]"
        >
          Save
        </Button>
      </section>
    </div>
  );
};

export default UserDataComponent;
