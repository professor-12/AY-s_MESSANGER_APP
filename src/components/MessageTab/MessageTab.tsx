import { useEffect, useState } from "react";
import Chat from "./Chat";
import { useContextApi } from "../../store/contextApi/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as Chatloader } from "./Chat";
import { Outlet } from "react-router-dom";

const MessageTab = () => {
    const { friendprofile } = useContextApi();
    const [message, setMessage] = useState(["k"]);

    const route = createBrowserRouter([
        {
            path: "",
            element: (
                <div className="flex justify-center h-screen items-center  flex-col space-y-3">
                    <img
                        className="md:w-[24rem]"
                        src="https://ac-messenger-p.web.app/start_messaging_img.bf5aacaf.svg"
                        alt=""
                    />
                    <h1 className="text-xl">
                        Start Messaging with ACMessenger
                    </h1>
                    <p>Select a chat in your inbox to start messaging.</p>
                </div>
            ),
        },
        {
            path: "/chat/:id",
            element: <Chat message={message} />,
            loader: Chatloader,
        },
    ]);

    return <div className=" bg-primary w-full">
        <Outlet></Outlet>
    </div>;
};
export default MessageTab;
