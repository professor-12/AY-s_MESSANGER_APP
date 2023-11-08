import { motion } from "framer-motion";
import ExpandableCard from "../../UI/ExpandableCard";
import arrow from "../../assets/svgs/Arrow.svg";
import darkmode from "../../assets/svgs/DarkMode.svg";
import logout from "../../assets/svgs/Logout.svg";
import { useContextApi } from "../../store/contextApi/store";
import {useNavigate} from "react-router-dom"
const Settings = () => {
    const navigate =  useNavigate()
    const { setSelected } = useContextApi();
    const Logout = () => {
        localStorage.removeItem("usercredentialstokenACMESSANGER");
        navigate("/auth")
    };
    return (
        <motion.div
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -20 },
            }}
            transition={{ type: "just" }}
            animate="visible"
            initial="hidden"
            className="space-y-3"
            exit="hidden"
        >
            <ExpandableCard>
                <div className="flex  space-x-4 p-2">
                    <img src={arrow} alt="" />
                    <p>Settings</p>
                </div>
            </ExpandableCard>
            <div className="bg-mutedcolor h-[1.4px]" />
            <div className="space-y-5">
                <ExpandableCard>
                    <div className="flex px-3  justify-between items-center">
                        <div className="flex space-x-3 items-center p-2">
                            <img src={darkmode} alt="" />
                            <p>Darkmode</p>
                        </div>
                        <span className="text-mutedcolor/80">on</span>
                    </div>
                </ExpandableCard>
                <ExpandableCard>
                    <div className="flex cursor-pointer px-3 justify-between items-center">
                        <div className="flex space-x-3 items-center p-2">
                            <img src={logout} alt="" />
                            <p onClick={Logout}>Logout</p>
                        </div>
                    </div>
                </ExpandableCard>
            </div>
        </motion.div>
    );
};

export default Settings;
