import ExpandableCard from "../../UI/ExpandableCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ChatLists = (props: any) => {
    interface User {
        displayname: string;
        user_profile: string;
        date_joined: string;
        email: string;
        profilepics: string;
        id: number;
    }
    const [contacts, setcontacts] = useState<User[]>([]);
    const fetchData = async () => {
        const data = await fetch("http://127.0.0.1:8000/contact/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
            },
        });
        const res = await data.json();
        setcontacts([...res]);
    };
    useEffect(() => {
        if (
            localStorage.getItem("usercredentialstokenACMESSANGER") ==
                undefined ||
            null
        ) {
            return;
        }
        fetchData();
    }, []);
    const Users: Array<User> = contacts;
    if (Users.length == 0) {
        return (
            <div className="bg-secondary bg-blend-saturation p-3  rounded-xl ">
                <h1 className="text-slate-400 font-semibold text-lg">
                    You don't have any friend yet.
                </h1>
                <p className="text-sm text-gray-500">
                    Go to the add to contact tab to add Contacts
                </p>
            </div>
        );
    }
    return Users.map((chat) => (
        <ExpandableCard>
            <div onClick={props.tab(true)}>
                <Link
                    to={`${chat.user_profile}`}
                    onClick={props.tab(false)}
                    className="flex p-3  cursor-pointer items-start  space-x-6"
                    key={chat.id}
                >
                    <div>
                        <img
                            className="h-[3.4rem] object-cover w-[3.4rem] rounded-full"
                            src={
                                import.meta.env.VITE_BASEURL + chat?.profilepics
                            }
                            alt="d"
                        />
                    </div>
                    <div className="flex  flex-col">
                        <h1 className="text-[1.4rem]">{chat?.displayname}</h1>
                        <div className="flex font-medium text-gray-400/80 text-sm space-x-3"></div>
                    </div>
                </Link>
            </div>
        </ExpandableCard>
    ));
};

export default ChatLists;
