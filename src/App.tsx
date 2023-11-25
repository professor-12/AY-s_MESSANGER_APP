import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as ChatLoader } from "./components/MessageTab/Chat";
import { Loader as AuthLoader } from "./components/Auth/Authen";
import { useState } from "react";
import Root from "./components/Root/Root";
import MessageTab from "./components/MessageTab/MessageTab";
import Chat from "./components/MessageTab/Chat";
import Auth from "./components/Auth/Authen";
import { loader } from "./components/Root/Root";
import Error from "./components/Error/Error";
function App() {
    const theme = localStorage.getItem("darkmode") == "true";

    const [darkmode, setdarkmode] = useState(theme);

    const route = createBrowserRouter([
        {
            element: (
                <Root darkmode={darkmode} setdarkmode={setdarkmode}></Root>
            ),
            errorElement: <Error />,
            loader: loader,
            children: [
                {
                    path: "",
                    element: <MessageTab></MessageTab>,
                    children: [
                        {
                            index: true,
                            element: (
                                <div className="flex justify-center  items-center  flex-col space-y-3">
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
