import Profile from "./Profile";
import Settings from "./Settings";
import AddtoContact from "./AddtoContact";
import Chats from "./Chats";
import { motion, AnimatePresence } from "framer-motion";
import { useContextApi } from "../../store/contextApi/store";
const Tab = (props:any) => {
    const { isSelected } = useContextApi();
    const selectedchat = isSelected === "Chats";
    const selectedProfile = isSelected === "profile";
    let select_add_to_contact = isSelected === "addContact";
    const selectedsettings = isSelected === "settings"
    return (
        <motion.div className='h-full dark:border-[#57575785] bg-white overflow-y-auto  p-5 pt-6 border-r min-w-[24rem] dark:bg-primary'>
            <AnimatePresence mode="wait">
                {selectedchat && <Chats tab={props.tab}></Chats>}
                {selectedProfile && <Profile></Profile>}
                {select_add_to_contact && <AddtoContact />}
                {selectedsettings && <Settings setdarkmode={props.setdarkmode} darkmode={props.darkmode}></Settings>}
            </AnimatePresence>
        </motion.div>
    );
};

export default Tab;
