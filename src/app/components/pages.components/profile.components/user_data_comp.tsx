// user data component
import Input from "../../form/Input";
import Wrapper from "../../form/wrapper";
import ImageUpload from "./image_upload";

const UserDataComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row sm:flex-col flex-wrap justify-between p-[20px] md:items-center bg-[#FAFAFA] w-full mt-[12px] rounded-[12px] ">
        <div className="text-[#737373] font-[400] text-[16px] basis-3/12 py-[12px]">
          Profile picture
        </div>

        <section className="basis-4/12 md:p-2 sm:p-0 ">
          <ImageUpload />
        </section>

        <div className="text-[#737373] font-[400] text-[12px] basis-5/12 py-[12px]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </div>
      </div>

      <div className=" justify-between p-[20px] items-center bg-[#FAFAFA] w-full mt-[18px] rounded-[12px]  ">
        <form className="flex-col flex flex-wrap">
          {/* first name */}
          <div className="flex flex-row flex-wrap items-center w-full">
            <div className="basis-4/12 ">
              <label
                htmlFor="First-name"
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
                  id="First-name"
                  name="First name"
                />
              </Wrapper>
            </div>
          </div>
          {/* last name */}
          <div className="flex flex-row flex-wrap items-center w-full mt-[16px]">
            <div className="basis-4/12 ">
              <label
                htmlFor="Last-name"
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
                  id="Last-name"
                  name="Last name"
                />
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
                  name="Email"
                />
              </Wrapper>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDataComponent;
