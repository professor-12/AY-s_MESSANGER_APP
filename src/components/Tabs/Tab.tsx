import Profile from "./Profile";
import Settings from "./Settings";
import AddtoContact from "./AddtoContact";
import Chats from "./Chats";
import { motion, AnimatePresence } from "framer-motion";
import { useContextApi } from "../../store/contextApi/store";
import Sidebar from "../sideBar/Sidebar";
import GroupTab from "../Group/GroupTab";

const Tab = (props: any) => {
    const { isSelected } = useContextApi();
    const selectedchat = isSelected === "Chats";
    const selectedProfile = isSelected === "profile";
    let select_add_to_contact = isSelected === "addContact";
    const selectedsettings = isSelected === "settings";
    const selectedGroup = isSelected === "Group";

    return (
        <motion.div className="h-full  dark:border-[#57575785]  overflow-y-auto md:p-5 p-2 pt-6 md:border-r md:min-w-[24rem] bg-white  dark:bg-primary">
            <AnimatePresence mode="wait">
                {selectedGroup && <GroupTab />}
                {selectedchat && <Chats></Chats>}
                {selectedProfile && <Profile></Profile>}
                {select_add_to_contact && <AddtoContact />}
                {selectedsettings && (
                    <Settings
                        setdarkmode={props.setdarkmode}
                        darkmode={props.darkmode}
                    ></Settings>
                )}
            </AnimatePresence>
            <div className="md:hidden">
                <Sidebar />
            </div>
        </motion.div>
    );
};

export default Tab;
