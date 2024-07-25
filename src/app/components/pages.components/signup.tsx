"use client";

import { Button } from "../button";
import Wrapper from "../form/wrapper";
import Input from "../form/Input";
import { Logo, Email, Password } from "../svgs";
import { Label } from "../form/label";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/app/context/AuthContext";
import { AuthContextType } from "@/app/context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/clientApp";
import { FormEvent } from "react";

interface UserType {
  email: string;
  password: string;
  confirmPassword: string;
}
interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const initialUser: UserType = {
  email: "",
  password: "",
  confirmPassword: "",
};

function SignupComponent() {
  const { loading } = useContext(AuthContext) as AuthContextType;
  const [data, setData] = useState<UserType>(initialUser);
  const [errors, setErrors] = useState<FormErrors>({});

  // Handler for updating user fields
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

  // handler for creating user
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (!data.email) {
      newErrors.email = "Can't be empty";
    }
    if (data.password.length < 6) {
      newErrors.password = "Include 6 characters";
    }
    if (data.password === "") {
      newErrors.password = "Please check again";
    }
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
    console.log("called");
  };

  return (
    <div className=" md:w-[476px] md:h-[573px] lg:w-[476px] lg:h-[573px] sm:items-start md:items-center lg:items-center sm:w-full sm:h-screen flex flex-col sm:pt-10 lg:items-center lg:p-0 md:p-0 sm:bg-white lg:bg-transparent">
      {/* logo */}
      <div className="px-8 sm:text-left md:text-center lg:text-center">
        <Logo />
      </div>
      {/* login screen */}
      <div className="rounded-[12px] sm:bg-white sm:bg-transparent w-full h-full text-[#333333] lg:mt-5 md:mt-5 p-[40px]">
        {/* heading */}
        <section>
          <h1 className="font-[700] lg:text-[32px] md:text-[32px] sm:text-[24px] leading-[48px]">
            Create account
          </h1>
          <p className="text-[#737373] font-[400] leading-[24px] text-[16px]">
            Let’s get you started sharing your links!
          </p>
        </section>

        {/* form field */}
        <section>
          <form
            onSubmit={handleCreateUser}
            className="mt-[24px] lg:w-[396px] sm:w-full flex flex-col flex-wrap"
          >
            {/* email */}
            <div>
              <Label htmlFor="email">Email address</Label>
              <Wrapper className={errors.email && "border-[#FF3939]"}>
                <Email className="basis-10" />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g alex@email.com"
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-[#FF3939] basis-48  left-0 text-[12px] text-right">
                    {errors.email}
                  </div>
                )}
              </Wrapper>
            </div>
            {/* create password */}
            <div className="mt-[24px]">
              <Label htmlFor="password">Create password</Label>
              <Wrapper className={errors.password && "border-[#FF3939]"}>
                <Password className="basis-10" />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="text-[#FF3939] basis-48  left-0 text-[12px] text-right">
                    {errors.password}
                  </div>
                )}
              </Wrapper>
            </div>
            {/* confirm password */}
            <div className="mt-[24px]">
              <Label htmlFor="ConfirmPassword">Confirm password</Label>
              <Wrapper className={errors.confirmPassword && "border-[#FF3939]"}>
                <Password className="basis-10" />
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <div className="text-[#FF3939] basis-72  left-0 text-[12px] text-right">
                    {errors.confirmPassword}
                  </div>
                )}
              </Wrapper>
            </div>
            {/* button */}
            <div className="mt-[24px]">
              <Button
                className={`${
                  loading ? "bg-[#BEADFF]" : "bg-[#633CFF]"
                } hover:shadow-[0_2px_30px_-8px_rgba(23,34,34,0.2)] text-white w-full`}
                type="submit"
              >
                Create new account
              </Button>
            </div>

            {/* footer link */}
            <div className="text-center items-center justify-center text-[#737373] p-[24px] flex lg:flex-row md:flex-row sm:flex-col">
              <span>Already have an account? </span>
              <Link className="text-[#633CFF] mx-1" href={"/login"}>
                Login
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default SignupComponent;
