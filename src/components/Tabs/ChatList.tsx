import ExpandableCard from "../../UI/ExpandableCard";
import { useEffect, useState } from "react";
import { User } from "../../../Interfaces/Interfaces";
import { Link, useNavigate } from "react-router-dom";
import ReactLoadingSpinner from "../ReactLoading";
import { useContextApi } from "../../store/contextApi/store";
const ChatLists = () => {
    const { settab } = useContextApi();
    const navigate = useNavigate();
    const [loading, setloading] = useState(true);
    const [contacts, setcontacts] = useState<User[]>([]);
    const fetchData = async () => {
        const data = await fetch(import.meta.env.VITE_BASEURL + "/contact", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
            },
        });
        if (!data.ok) console.log(data);
        if (data.status === 403) {
            navigate("/auth");
        }
        const res = await data.json();
        setcontacts(res);
        setloading(false);
    };

    useEffect(() => {
        if (
            localStorage.getItem("usercredentialstokenACMESSANGER") ==
                undefined ||
            null
        ) {
            navigate("/auth");
            return;
        }
        fetchData();
    }, []);

    const Users: Array<User> = contacts;
    if (loading) {
        return (
            <div className="bg-blue-100 dark:bg-transparent py-20">
                <ReactLoadingSpinner
                    type="spin"
                    color="blue"
                    width="10%"
                    height="12%"
                >
                    Fetching Chats
                </ReactLoadingSpinner>
            </div>
        );
    }
    if (Users.length == 0) {
        return (
            <div className="dark:bg-secondary bg-neutral-200 drop-shadow-xl   p-4 rounded-xl ">
                <h1 className="dark:text-slate-400  text-slate-700 font-semibold text-lg">
                    You don't have any friend yet.
                </h1>
                <p className="text-sm text-gray-500">
                    Go to the add to contact tab to add Contacts
                </p>
            </div>
        );
    }

    return Users.map((chat) => (
        <ExpandableCard key={chat.id}>
            <div onClick={() => settab(false)}>
                <Link
                    to={`${chat.user_profile}`}
                    className="flex p-3  cursor-pointer items-start  space-x-6"
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
                        <h1 className="text-[1.2rem]">{chat?.displayname}</h1>
                        <p>{chat?.date_joined}</p>
                        <div className="flex font-medium text-gray-400/80 text-sm space-x-3"></div>
                    </div>
                </Link>
            </div>
        </ExpandableCard>
    ));
};

export default ChatLists;
