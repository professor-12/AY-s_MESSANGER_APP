import { motion } from "framer-motion";
import { useContextApi } from "../../store/contextApi/store";
import arrow from "../../assets/svgs/Arrow.svg";
import email from "../../assets/svgs/email.svg";
import location from "../../assets/svgs/location.svg";
import ExpandableCard from "../../UI/ExpandableCard";
const Profile = () => {
    const { setSelected, profile } = useContextApi();
    
    

    return (
        <motion.div
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -20 },
            }}
            transition={{
                type: "just",
            }}
            animate="visible"
            initial="hidden"
            className="space-y-9"
        >
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-lg pr-5  
            hover:bg-mutedcolor"
            >
                <div
                    onClick={() => {
                        setSelected("Chats");
                    }}
                    className="flex p-2 px-3 cursor-pointer space-x-3"
                >
                    <img src={arrow} alt="" />
                    <p>My Profile</p>
                </div>
            </motion.div>

            <div className="flex items-center flex-col space-y-2">
                <img
                    src={import.meta.env.VITE_BASEURL +  profile.profilepics}
                    alt="#"
                
                    className="w-20 bg-red-400 h-20 rounded-full cursor-pointer object-cover"
                />
                <div className="flex flex-col text-center">
                    <span className="text-xl">{profile.displayname}</span>
                    <span>{profile.displayname|| ""}</span>
                </div>
            </div>

            <div>
                <div className="bg-mutedcolor h-[1.4px]" />
                <ExpandableCard>
                    <div className="p-3 flex space-x-4">
                        <img src={email} alt="" />
                        <p>{profile.email}</p>
                    </div>
                </ExpandableCard>
                <ExpandableCard>
                    <div className="p-3 flex space-x-4">
                        <img src={location} alt="" />
                        {/* Location */}
                        <p>Earth</p>
                    </div>
                </ExpandableCard>
            </div>
        </motion.div>
    );
};

export default Profile;
