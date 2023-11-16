import ChatHeader from "./ChatHeader";
import send from "../../assets/svgs/Send.svg";
import File from "../../assets/svgs/File.svg";
import { useState, useEffect, FormEvent } from "react";
import Messages from "./Messages";
import { useLoaderData } from "react-router-dom";
import { useContextApi } from "../../store/contextApi/store";
import Pusher from "pusher-js";
import { AnimatePresence } from "framer-motion";
import { useRef, RefObject } from "react";
import Modal from "../Modal/Modal";

const Chat = () => {
    const data: any = useLoaderData();
    const blob = new Blob([""], { type: "file" });
    const { setfriend_profile, friendprofile } = useContextApi();
    const [url, seturl] = useState(URL.createObjectURL(blob));
    const message = data.messageinfo;
    const [sentmessage, setsentmessage] = useState("");
    const [messages, setmessages] = useState([]) as Array<any>;
    const [valid, setvalid] = useState(false);
    const [sendImg, setSendImg] = useState(false);

    useEffect(() => {
        setmessages(message);
        Pusher.logToConsole = true;

        var pusher = new Pusher("ceffb5697c2e0be737f8", {
            cluster: "mt1",
        });
        var channel = pusher.subscribe("chat");
        channel.bind("message", function (data: any) {
            setmessages(data);
        });
    }, [data]);

    const fileref = useRef() as RefObject<HTMLInputElement>;
    const formData = new FormData();
    const upload = () => {
        formData.append("reciever", friendprfofile.user);
        if (
            fileref.current &&
            fileref.current.files &&
            fileref.current.files[0]
        ) {
            formData.append("img", fileref.current.files[0]);
        }

        fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                Authorization:
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
            },
            body: formData,
        });
        console.log(fileref?.current?.value);
        setSendImg(false);
    };

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
        <>
            <AnimatePresence>
                {sendImg && (
                    <Modal onClick={setSendImg}>
                        <div className="flex flex-col w-[14rem] gap-3 text-white">
                            <div>
                                <img className="rounded-xl" src={url} alt="D" />
                            </div>
                            <button
                                onClick={upload}
                                className="bg-blue-700 p-2 rounded-xl"
                            >
                                Send
                            </button>
                            <button
                                onClick={() => {
                                    setSendImg(false);
                                }}
                                className="border rounded-xl border-white p-1 w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </Modal>
                )}
            </AnimatePresence>
            <div
                className={`relative  py-20  h-screen bg-lightgray dark:bg-secondary`}
            >
                <ChatHeader />
                {messages.length > 0 ? (
                    <div className="max-h-[30rem] mt-[.5rem]  space-y-4   justify-end flex flex-col p-3 overflow-y-auto gap-2 dark:bg-secondary">
                        {messages?.map((messages: any) => {
                            return (
                                <div>
                                    <Messages
                                        key={messages.id}
                                        message={messages}
                                    ></Messages>
                                </div>
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
                            ref={fileref}
                            onChange={(e: any) => {
                                setSendImg(true);
                                seturl(URL.createObjectURL(e.target.files[0]));
                            }}
                            name="img"
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
        </>
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
