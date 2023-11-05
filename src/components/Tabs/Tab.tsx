import Profile from "./Profile";
import Settings from "./Settings";
import AddtoContact from "./AddtoContact";
import Chats from "./Chats";
import { motion, AnimatePresence } from "framer-motion";
import { useContextApi } from "../../store/contextApi/store";
const Tab = () => {
    const { isSelected } = useContextApi();
    const selectedchat = isSelected === "Chats";
    const selectedProfile = isSelected === "profile";
    let select_add_to_contact = isSelected === "addContact";
    const selectedsettings = isSelected === "settings";
    
    return (
        <motion.div className=' className="h-full border-[#57575785]  p-5 pt-6 border-r min-w-[24rem] bg-primary'>
            <AnimatePresence mode="wait">
                {selectedchat && <Chats></Chats>}
                {selectedProfile && <Profile></Profile>}
                {select_add_to_contact && <AddtoContact />}
                {selectedsettings && <Settings></Settings>}
            </AnimatePresence>
        </motion.div>
    );
};

export default Tab;
