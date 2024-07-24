import { Skeleton } from "../../svgs";


const SideContent = () => {
  return (
    <div className="basis-5/12 bg-white m-4 rounded-[12px] lg:flex md:hidden sm:hidden justify-center items-center">
      <Skeleton />
    </div>
  );
};

export default SideContent;
