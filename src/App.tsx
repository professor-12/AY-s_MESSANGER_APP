import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as ChatLoader } from "./components/MessageTab/Chat";
import { Loader as AuthLoader } from "./components/Auth/Authen";
import { useState } from "react";
import Root from "./components/Root/Root";
import MessageTab from "./components/MessageTab/MessageTab";
import Chat from "./components/MessageTab/Chat";
import Auth from "./components/Auth/Authen";
import { loader } from "./components/Root/Root";
function App() {
    const theme = localStorage.getItem("darkmode") == "true";
    const [tabs, settab] = useState(true);
    const [darkmode, setdarkmode] = useState(theme);

    const route = createBrowserRouter([
        {
            element: (
                <Root
                    darkmode={darkmode}
                    tabs={tabs}
                    settab={settab}
                    setdarkmode={setdarkmode}
                ></Root>
            ),
            loader: loader,
            children: [
                {
                    path: "",
                    loader: ChatLoader,
                    element: <MessageTab></MessageTab>,
                    children: [
                        {
                            index: true,
                            element: (
                                <div>
                                    <div className="md:flex hidden justify-center  items-center  flex-col space-y-3">
                                        <img
                                            className="md:w-[24rem]"
                                            src="https://ac-messenger-p.web.app/start_messaging_img.bf5aacaf.svg"
                                            alt=""
                                        />
                                        <h1 className="text-xl">
                                            Start Messaging with ACMessenger
                                        </h1>
                                        <p>
                                            Select a chat in your inbox to start
                                            messaging.
                                        </p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            path: ":id",
                            loader: ChatLoader,
                            element: <Chat></Chat>,
                        },
                    ],
                },
            ],
        },
        {
            path: "auth",
            element: <Auth />,
            action: AuthLoader,
        },
    ]);

    return (
        <div className={`${darkmode && "dark"}`}>
            <RouterProvider router={route}></RouterProvider>
        </div>
    );
}

export default App;
