import Tab from "../Tabs/Tab";
import { useEffect } from "react";
import Sidebar from "../sideBar/Sidebar";
import MessageTab from "../MessageTab/MessageTab";
import { useNavigate, useLoaderData, redirect } from "react-router-dom";
import { useContextApi } from "../../store/contextApi/store";

const Root = () => {
    const data:any = useLoaderData();
    const { setprofile } = useContextApi();
    setprofile(data);

    const navigate = useNavigate();
    useEffect(() => {
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
        <div className="flex h-screen text-white bg-secondary">
            <Sidebar />
            <Tab />
            <MessageTab></MessageTab>
        </div>
    );
};

export default Root;

export const loader = async () => {
    if (!localStorage.getItem("usercredentialstokenACMESSANGER")) {
        return null
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
