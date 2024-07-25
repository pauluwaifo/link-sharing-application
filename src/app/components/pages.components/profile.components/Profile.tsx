// profile component

import UserDataComponent from "./user_data_comp";

const ProfileComp = () => {


  return (
    <div className="lg:basis-7/12 md:basis-full sm:basis-full flex-wrap lg:overflow-auto md:overflow-auto sm:overflow-hidden bg-white m-4 rounded-[12px] flex flex-col items-center md:p-[40px] lg:p-[40px] sm:p-[24px]">
      {/* heading */}
      <section className="text-left w-full">
        <h1 className="font-[700] md:text-[32px] lg:text-[32px] sm:text-[24px] leading-[48px] text-[#333333] m-0 p-0">
          Profile Details
        </h1>
        <p className="text-[#737373] font-[400] text-[16px] leading-[28px] m-0 p-0">
          Add your details to create a personal touch to your profile.
        </p>
      </section>

      {/* content */}
      <section className="mt-[24px] w-full">
        <UserDataComponent />
      </section>
    </div>
  );
};

export default ProfileComp;
