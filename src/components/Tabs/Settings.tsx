import { motion } from "framer-motion";
import ExpandableCard from "../../UI/ExpandableCard";
import arrow from "../../assets/svgs/Arrow.svg";
import darkmode from "../../assets/svgs/DarkMode.svg";
import logout from "../../assets/svgs/Logout.svg";
import { useNavigate } from "react-router-dom";
import useDarkmode from "../../hooks/useDarkmode";
import { useContextApi } from "../../store/contextApi/store";
const Settings = (props: any) => {
    const navigate = useNavigate();
    const { setSelected } = useContextApi()
    const Logout = () => {
        localStorage.removeItem("usercredentialstokenACMESSANGER");
        navigate("/auth");
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
                <div onClick={()=> {setSelected("Chats")}} className="flex  space-x-4 p-2">
                    <img src={arrow} alt="" />
                    <p>Settings</p>
                </div>
            </ExpandableCard>
            <div className="dark:bg-mutedcolor bg-mutedcolor/20 h-[1.4px]" />
            <div className="space-y-5">
                <ExpandableCard>
                    <div
                        onClick={() =>  {props.setdarkmode(!props.darkmode) , useDarkmode()} }
                        className="flex px-3   justify-between items-center"
                    >
                        <div className="flex space-x-3 items-center p-2">
                            <img src={darkmode} alt="" />
                            <p>Darkmode</p>
                        </div>
                        <span className="text-mutedcolor/80">{props.darkmode ? "on" : "off"}</span>
                    </div>
                </ExpandableCard>
                <ExpandableCard>
                    <div
                        onClick={Logout}
                        className="flex cursor-pointer px-3 justify-between items-center"
                    >
                        <div className="flex space-x-3 items-center p-2">
                            <img src={logout} alt="" />
                            <p>Logout</p>
                        </div>
                    </div>
                </ExpandableCard>
            </div>
        </motion.div>
    );
};

export default Settings;
