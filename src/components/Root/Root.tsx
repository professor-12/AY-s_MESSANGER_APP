import Tab from "../Tabs/Tab";
import { useEffect, useState } from "react";
import Sidebar from "../sideBar/Sidebar";
import MessageTab from "../MessageTab/MessageTab";
import { useNavigate, redirect } from "react-router-dom";

const Root = () => {
    const theme = localStorage.getItem("darkmode") == "true";
    const [darkmode, setdarkmode] = useState(theme);
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
            className={`${darkmode && "dark"}
        transition-colors duration-1000`}
        >
            <div>
                <div
                    className="flex h-screen dark:text-white 
            text-slate-700
             bg-lightgray dark:bg-secondary"
                >
                    <Sidebar />
                    <Tab setdarkmode={setdarkmode} darkmode={darkmode} />
                    <MessageTab></MessageTab>
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
