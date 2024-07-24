import Link from "next/link";
import { Button } from "../../button";

const PreviewNavigation = () => {
  return (
    <div
      className={`h-[64px] justify-between rounded-[12px] p-[16px] flex flex-row m-[8px] md:m-0 lg:m-0 bg-white items-center`}
    >
      {/* back to editor */}
      <Link
        className={`inline-block flex group flex-row items-center py-[11px] px-[27px] font-[600] text-[16px] leading-[24px] rounded-[8px] mx-[2px] text-[#633CFF] border border-[#633CFF] justify-center`}
        href={"/"}
      >
        Back to Editor
      </Link>

      {/* share link */}
      <Button className="text-white bg-[#633CFF]  inline-block px-[27px] py-[11px]">
        Share Link
      </Button>
    </div>
  );
};

export default PreviewNavigation;
