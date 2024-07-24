"use client";

import { Button } from "../button";
import Wrapper from "../form/wrapper";
import Input from "../form/Input";
import { Logo, Email, Password } from "../svgs";
import { Label } from "../form/label";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/app/context/AuthContext";
import { AuthContextType } from "@/app/context/AuthContext";

function SignupComponent() {
  const { loading } = useContext(AuthContext) as AuthContextType;

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
          <form className="mt-[24px] lg:w-[396px] sm:w-full flex flex-col flex-wrap">
            {/* email */}
            <div>
              <Label htmlFor="Email">Email address</Label>
              <Wrapper>
                <Email className="basis-10" />
                <Input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="e.g alex@email.com"
                />
              </Wrapper>
            </div>
            {/* create password */}
            <div className="mt-[24px]">
              <Label htmlFor="Create password">Create password</Label>
              <Wrapper>
                <Password className="basis-10" />
                <Input
                  type="password"
                  name="Create Password"
                  id="create-password"
                  placeholder="Create password"
                />
              </Wrapper>
            </div>
            {/* confirm password */}
            <div className="mt-[24px]">
              <Label htmlFor="Confirm password">Confirm password</Label>
              <Wrapper>
                <Password className="basis-10" />
                <Input
                  type="password"
                  name="Confirm Password"
                  id="confirm-password"
                  placeholder="Confirm password"
                />
              </Wrapper>
            </div>
            {/* button */}
            <div className="mt-[24px]">
              <Button
                className={`${
                  loading ? "bg-[#BEADFF]" : "bg-[#633CFF]"
                } hover:shadow-[0_2px_30px_-8px_rgba(23,34,34,0.2)] text-white`}
              >
                Create new account
              </Button>
            </div>

            {/* footer link */}
            <div className="text-center items-center justify-center text-[#737373] p-[24px] flex lg:flex-row md:flex-row sm:flex-col">
              <span>Already have an account?{" "}</span>
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
