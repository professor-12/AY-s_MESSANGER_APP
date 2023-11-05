import MessageTab from "./components/MessageTab/MessageTab";
import Sidebar from "./components/sideBar/Sidebar";
import Tab from "./components/Tabs/Tab";
import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { useContextApi } from "./store/contextApi/store";
function App() {
    const { profile, setprofile } = useContextApi();
    const data = useFetch;
    useEffect(() => {
        const func = async () => {
            const { user_profile } = await data();
            setprofile(user_profile);
        };

        func();

        return () => {};
    }, [setprofile]);

    return (
        <>
            <div className="flex h-screen text-white bg-secondary">
                <Sidebar />
                <Tab />
                <MessageTab></MessageTab>

                {/* <Signup/> */}
            </div>
        </>
    );
}

export default App;
