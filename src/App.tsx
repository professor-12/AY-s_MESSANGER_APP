import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as ChatLoader } from "./components/MessageTab/Chat";
import { Loader as AuthLoader } from "./components/Auth/Authen";
import { useEffect, useState } from "react";
import Root from "./components/Root/Root";
import Error from "./components/Error/Error";
import MessageTab from "./components/MessageTab/MessageTab";
import Chat from "./components/MessageTab/Chat";
import { useContextApi } from "./store/contextApi/store";
import Auth from "./components/Auth/Authen";
import Home from "./components/MessageTab/Home";
import Pusher from "pusher-js";
function App() {
    const { profile, friendprofile } = useContextApi();

    useEffect(() => {
        var pusher = new Pusher(import.meta.env.VITE_PUSHER_SECRET_KEY, {
            cluster: "mt1",
        });
        pusher.channel("online-" + profile.displayname);
        pusher.send_event("online-event", navigator.onLine);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkmode", "true");
        var pusher = new Pusher(import.meta.env.VITE_PUSHER_SECRET_KEY, {
            cluster: "mt1",
        });
        pusher.subscribe("online-" + friendprofile);
        pusher.channel("online-" + profile.displayname);
        pusher.send_event("online-event", navigator.onLine);
    }, []);

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
                    errorElement: <Error />,
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
