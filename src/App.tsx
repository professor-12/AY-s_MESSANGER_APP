import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as ChatLoader } from "./components/MessageTab/Chat";
import { Loader as AuthLoader } from "./components/Auth/Authen";
import Root from "./components/Root/Root";
import MessageTab from "./components/MessageTab/MessageTab";
import Chat from "./components/MessageTab/Chat";
import Auth from "./components/Auth/Authen";
import { loader } from "./components/Root/Root";
function App() {

   
    const route = createBrowserRouter([
        {
            path: "",
            element: <Root></Root>,
            loader: loader,
            children: [
                {
                    path: "",
                    element: <MessageTab></MessageTab>,
                    children: [
                        {
                            index: true,
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
        <>
            <RouterProvider router={route}></RouterProvider>
        </>
    );
}

export default App;
