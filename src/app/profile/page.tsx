import ProfileComp from "../components/pages.components/profile.components/Profile";
import SideContent from "../components/pages.components/side_content";

SideContent

const Profile = () => {
    return (
        <div className="flex flex-row justify-center w-full ">
        <SideContent />
        <ProfileComp />
      </div>
    )
}

export default Profile;