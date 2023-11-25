import Tab from "../Tabs/Tab";
import { useEffect, useState } from "react";
import Sidebar from "../sideBar/Sidebar";
import MessageTab from "../MessageTab/MessageTab";
import { useNavigate, redirect } from "react-router-dom";

const Root = ({setdarkmode,darkmode}:any) => {
    const [tab, settab] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("darkmode")) {
            localStorage.setItem("darkmode", "true");
        }
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
                    {tab && <Sidebar />}
                    {tab && (
                        <Tab
                            tab={settab}
                            setdarkmode={setdarkmode}
                            darkmode={darkmode}
                        />
                    )}
                    {!tab && <MessageTab></MessageTab>}
                </div>
            </div>
            <div id="portal"></div>
        </div>
    );
};

export default Root;

export const loader = async () => {
    if (!localStorage.getItem("usercredentialstokenACMESSANGER")) {
        return null;
    }
    const response = await fetch(import.meta.env.VITE_BASEURL + `/profile`, {
        method: "GET",
        headers: {
            Authorization:
                "Token " +
                localStorage.getItem("usercredentialstokenACMESSANGER"),
        },
    });
    if (!response.ok) {
        return redirect("/auth");
    }
    return response;
};
