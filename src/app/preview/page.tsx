import PhoneView from "../components/pages.components/profile.components/phone_view";
import PreviewNavigation from "../components/pages.components/preview.components/preview_navigation";

const Preview = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="md:bg-[#633CFF] w-full md:h-[280px] sm:h-[200px] rounded-b-[32px] md:p-[8px] sm:p-0 sm:bg-transparent">
        <PreviewNavigation />
      </div>

      {/* link info */}
      <div className="bg-transparent relative z-10 top-32 flex flex-row justify-center items-center w-full">
        <PhoneView />
      </div>
    </div>
  );
};

export default Preview;
