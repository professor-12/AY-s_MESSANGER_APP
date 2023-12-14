import Tab from "../Tabs/Tab";
import { useEffect } from "react";
import Sidebar from "../sideBar/Sidebar";
import MessageTab from "../MessageTab/MessageTab";
import { useNavigate } from "react-router-dom";

import { useContextApi } from "../../store/contextApi/store";
const Root = ({ setdarkmode, darkmode }: any) => {
    const { tab } = useContextApi();
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("darkmode"))
            localStorage.setItem("darkmode", "true");

        if (
            localStorage.getItem("usercredentialstokenACMESSANGER") ==
                undefined ||
            null
        ) {
            navigate("/auth");
            return;
        }
    }, []);

    return (
        <div
            className={`
        transition-colors duration-1000`}
        >
            <div>
                <div
                    className="md:flex hidden min-h-screen dark:text-white 
            text-slate-700
             bg-lightgray dark:bg-secondary"
                >
                    <Sidebar />
                    <Tab setdarkmode={setdarkmode} darkmode={darkmode} />
                    <MessageTab></MessageTab>
                </div>
                <div
                    className="md:hidden  h-screen dark:text-white 
            text-slate-700
             bg-lightgray dark:bg-secondary"
                >
                    {tab && <Sidebar />}
                    {tab && (
                        <Tab setdarkmode={setdarkmode} darkmode={darkmode} />
                    )}
                    {!tab && <MessageTab></MessageTab>}
                </div>
            </div>
            <div id="portal"></div>
        </div>
    );
};

export default Root;
