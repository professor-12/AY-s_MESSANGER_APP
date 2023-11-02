import Profile from "./Profile";
import Settings from "./Settings";
import AddtoContact from "./AddtoContact";
import Chats from "./Chats";
import { useContextApi } from "../../store/contextApi/store";
const Tab = () => {
    const { isSelected } = useContextApi();
    const selectedchat = isSelected === "Chats";
    const selectedProfile = isSelected === "profile";
    let select_add_to_contact = isSelected === "addContact";
    const selectedsettings = isSelected === "settings";
    return (
        <div className=' className="h-full border-[#383737]  p-10 pt-8 border-r min-w-[24rem] bg-primary'>
            {selectedchat && <Chats></Chats>}
            {selectedProfile && <Profile ></Profile>}
            {select_add_to_contact && (
                <AddtoContact/>
            )}
            {selectedsettings && (
                <Settings></Settings>
            )}
        </div>
    );
};

export default Tab;
