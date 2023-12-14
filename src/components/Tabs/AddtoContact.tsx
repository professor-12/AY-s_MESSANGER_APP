import AddtoCaontactList from "./AddtoCaontactList";
import { motion } from "framer-motion";
import arrow from "../../assets/svgs/Arrow.svg";
import { useContextApi } from "../../store/contextApi/store";
import ExpandableCard from "../../UI/ExpandableCard";
import { useState, useEffect } from "react";
import ReactLoadingSpinner from "../ReactLoading";
const AddtoContact = () => {
    const BASE_URL = import.meta.env.VITE_BASEURL;
    const [loading, setloading] = useState(true);
    interface Profile {
        displayname: string;
        email: string;
        profilepics: string;
        id: number;
        bio: string;
    }
    const [Users, setUsers] = useState<Profile[]>([]);

    const fetchUsers = async () => {
        const resp = await fetch(BASE_URL + "/users");
        const data = await resp.json();
        return await data;
    };
    useEffect(() => {
        const data = fetchUsers();
        data.then((e) => {
            setUsers(e);
            setloading(false);
        });
    }, []);

    const { setSelected } = useContextApi();

    return (
        <motion.div
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -20 },
            }}
            transition={{ type: "just" }}
            animate="visible"
            initial="hidden"
            className="space-y-3 h-screen overflow-scroll pb-32"
            exit="hidden"
        >
            <ExpandableCard>
                <div
                    onClick={() => {
                        setSelected("Chats");
                    }}
                    className="flex p-2 px-3 cursor-pointer space-x-3"
                >
                    <img src={arrow} alt="" />
                    <p>Add Contact</p>
                </div>
            </ExpandableCard>
            <form
                action=""
                className="overflow-hidden dark:bg-secondary  rounded-full w-full"
            >
                <input
                    className="rounded-full px-3 p-2 w-full dark:bg-secondary 
                    bg-lightgray  focus:border-2
                    outline-0
                    boder-slate-800
                    focus:border-slate-700
                    focus:dark:border-white"
                    type="text"
                    placeholder="Search"
                />
            </form>
            {loading ? (
                <ReactLoadingSpinner
                    type="cylon"
                    color="blue"
                    width="20%"
                    height="12%"
                >
                    Fetching Contacts
                </ReactLoadingSpinner>
            ) : (
                Users.map((user) => (
                    <AddtoCaontactList key={user.id} user={user} />
                ))
            )}
        </motion.div>
    );
};
export default AddtoContact;
