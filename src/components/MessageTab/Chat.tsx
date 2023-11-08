import ChatHeader from "./ChatHeader";
import send from "../../assets/svgs/Send.svg";
import File from "../../assets/svgs/File.svg";
import Messages from "./Messages";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useContextApi } from "../../store/contextApi/store";
const Chat = (props: any) => {
    const { id } = useParams();
    const { setfriend_profile, profile } = useContextApi();

 

    const message = useLoaderData();
    return (
        <div className="relative py-20  h-screen bg-secondary">
            <ChatHeader />
            {
                <div className="h-[80%] p-2 space-y-4  flex  flex-col justify-end   gap-2 bg-[secondary]">
                    {message?.map((messages: any) => {
                        return (
                            <Messages
                                key={messages.id}
                                message={messages}
                            ></Messages>
                        );
                    })}
                </div>
            }
            <form className="pt-20">
                <div className="flex pl-4 items-center overflow-hidden px-3 space-x-5 bg-primary right-12 left-12  m-3 rounded-full absolute bottom-12">
                    <input
                        type="file"
                        className="opacity-0 absolute left-10 w-5"
                    />
                    <img src={File} alt="" />
                    <input
                        className="bg-transparent focus:outline-none py-5 text-slate-300 min-w-0 flex-1"
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

export const loader = async ({ req, params }: any) => {
    const data = params.id;
    const BODY = {
        user: "OLAiya",
        reciever: data,
    };

    const response = await fetch("http://127.0.0.1:8000/message/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(BODY),
    });
    if (!response.ok) return null;
    return response;
};
export default Chat;
