import Tab from "../Tabs/Tab";
import { useEffect } from "react";
import Sidebar from "../sideBar/Sidebar";
import MessageTab from "../MessageTab/MessageTab";
import { useNavigate } from "react-router-dom";

const Root = ({ setdarkmode, darkmode, tabs, settab }: any) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("darkmode")) {
            localStorage.setItem("darkmode", "true");
        }
        if (
            localStorage.getItem("usercredentialstokenACMESSANGER") ==
                undefined || null
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
                    className="md:flex hidden h-screen dark:text-white 
            text-slate-700
             bg-lightgray dark:bg-secondary"
                >
                    <Sidebar />
                    <Tab
                        tab={settab}
                        setdarkmode={setdarkmode}
                        darkmode={darkmode}
                    />
                    <MessageTab></MessageTab>
                </div>
                <div
                    className="md:hidden  h-screen dark:text-white 
            text-slate-700
             bg-lightgray dark:bg-secondary"
                >
                    {tabs && <Sidebar />}
                    {tabs && (
                        <Tab
                            tab={settab}
                            setdarkmode={setdarkmode}
                            darkmode={darkmode}
                        />
                    )}
                    {!tabs && <MessageTab></MessageTab>}
                </div>
            </div>
            <div id="portal"></div>
        </div>
    );
};

export default Root;
