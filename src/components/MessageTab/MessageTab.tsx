import { useEffect, useState } from "react";

const MessageTab = () => {
    const [message, setMessage] = useState([]);

    
    const BODY = { user: "Amazing", reciever: "Emmanuel" };

    const fetchChat = async () => {
        const response = await fetch("http://127.0.0.1:8000/message/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(BODY),
        });

        const data = await response.json();

        setMessage(data);
    };

    useEffect(() => {
        fetchChat();
    }, []);

    console.log(message)

    return (
        <div className="flex-auto bg-primary">
            <div className="flex justify-center h-screen items-center  flex-col space-y-3">
                <img
                    className="md:w-[24rem]"
                    src="https://ac-messenger-p.web.app/start_messaging_img.bf5aacaf.svg"
                    alt=""
                />
                <h1 className="text-xl">Start Messaging with ACMessenger</h1>
                <p>Select a chat in your inbox to start messaging.</p>
            </div>
            {/* <Chat/> */}
        </div>
    );
};

export default MessageTab;
