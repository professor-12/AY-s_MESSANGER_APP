import ChatHeader from "./ChatHeader";
import send from "../../assets/svgs/Send.svg";
import File from "../../assets/svgs/File.svg";
import { useState, useEffect, FormEvent } from "react";
import Messages from "./Messages";
import { useLoaderData } from "react-router-dom";
import { useContextApi } from "../../store/contextApi/store";
import Pusher from "pusher-js";
const Chat = () => {
    const data: any = useLoaderData();
    const { setfriend_profile, friendprofile } = useContextApi();
    const message = data.messageinfo;
    const [sentmessage, setsentmessage] = useState("");
    const [messages, setmessages] = useState([]) as Array<any>;
    const [valid, setvalid] = useState(false);

    useEffect(() => {
        setmessages(message);

        Pusher.logToConsole = true;

        var pusher = new Pusher("aa2f3d6f65bfcab9b2f4", {
            cluster: "mt1",
        });

        var channel = pusher.subscribe("chat");
        channel.bind("message", function (data: any) {
            setmessages(data);
        });
    }, [data]);

    const sendmessage = () => {
        fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
            },
            body: JSON.stringify({
                reciever: friendprofile.user,
                message: sentmessage,
            }),
        });
    };
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        if (sentmessage.trim().length == 0) return;
        setvalid(true);
    };
    const friendprfofile = data.friendprofile;
    useEffect(() => {
        valid && sendmessage();
        setsentmessage("");
        setvalid(false);
    }, [messages, valid, friendprfofile]);

    setfriend_profile(friendprfofile);

    return (
        <div
            className={`relative py-20  h-screen bg-lightgray dark:bg-secondary`}
        >
            <ChatHeader />
            {messages.length > 0 ? (
                <div className="h-[80%] mt-[.5rem]  space-y-4   justify-end flex flex-col p-3 overflow-y-scroll gap-2 dark:bg-secondary">
                    {messages?.map((messages: any) => {
                        return (
                            <Messages
                                key={messages.id}
                                message={messages}
                            ></Messages>
                        );
                    })}
                </div>
            ) : (
                <div className="absolute  lg:right-[40%]">
                    <img className="w-[18rem]" src="/No chat.svg" alt="f" />
                    <h1 className="text-2xl my-3">
                        Your conversation is empty.
                    </h1>
                    <p className="text-slate-400">start chatting below</p>
                </div>
            )}
            <form onSubmit={handlesubmit} className="pt-20 w-full">
                <div className="flex pl-4 items-center overflow-hidden px-3 space-x-5 bg-white dark:bg-primary right-0 left-2  m-3 rounded-full absolute bottom-8">
                    <input
                        type="file"
                        className="opacity-0 absolute left-10 w-5"
                    />
                    <img src={File} alt="" />
                    <input
                        value={sentmessage}
                        onChange={(e) => {
                            setsentmessage(e.target.value);
                        }}
                        className="bg-transparent focus:outline-none py-5 dark:text-slate-300 min-w-0 flex-1"
                        placeholder="Message Here"
                        type="text"
                    />
                    <button className="bg-[#3b82f6] p-2 rounded-full">
                        <img src={send} alt="" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export const loader = async ({ params }: any) => {
    const data = params.id;
    const BODY = {
        reciever: data,
    };

    const response = await fetch("http://127.0.0.1:8000/message/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Token " +
                localStorage.getItem("usercredentialstokenACMESSANGER"),
        },
        body: JSON.stringify(BODY),
    });
    if (!response.ok) return null;
    return response;
};
export default Chat;
