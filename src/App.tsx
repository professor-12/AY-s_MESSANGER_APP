import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as ChatLoader } from "./components/MessageTab/Chat";
import { Loader as AuthLoader } from "./components/Auth/Authen";
import { useState } from "react";
import Root from "./components/Root/Root";
import MessageTab from "./components/MessageTab/MessageTab";
import Chat from "./components/MessageTab/Chat";
import Auth from "./components/Auth/Authen";
import Home from "./components/MessageTab/Home";
function App() {
    const theme = localStorage.getItem("darkmode") == "true";
    const [darkmode, setdarkmode] = useState(theme);
    const route = createBrowserRouter([
        {
            element: (
                <Root darkmode={darkmode} setdarkmode={setdarkmode}></Root>
            ),
            children: [
                {
                    path: "",
                    element: <MessageTab></MessageTab>,
                    children: [
                        {
                            index: true,
                            element: <Home />,
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
            id: "action",
        },
    ]);

    return (
        <div className={`${darkmode && "dark"}`}>
            <RouterProvider router={route}></RouterProvider>
        </div>
    );
}

export default App;
