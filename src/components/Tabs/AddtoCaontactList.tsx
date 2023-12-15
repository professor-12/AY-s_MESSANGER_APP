"use client";
import { useEffect, useState } from "react";
import ExpandableCard from "../../UI/ExpandableCard";
import Modal from "../Modal/Modal";
import { AnimatePresence } from "framer-motion";
import Loading from "../Loading/Loading";

const AddtoCaontactList = ({ user }: any) => {
    const [contact, setcontact] = useState(false);
    const [useralreadyexist, setUseralreadyexist] = useState(false);
    const createcontact = (contact: any) => {
        fetch(import.meta.env.VITE_BASEURL + "/contactcreation/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
            },

            body: JSON.stringify({ contact: contact }),
        })
            .then((res) => {
                return res.json();
            })
            .then((cl) => {
                if (cl == "User is already your contact")
                    setUseralreadyexist(true);
            });
        setcontact(false);
    };

    useEffect(() => {
        const time = setTimeout(() => {
            setUseralreadyexist(false);
        }, 2000);

        return () => {
            clearTimeout(time);
        };
    }, [useralreadyexist]);
    return (
        <>
            <ExpandableCard>
                <>
                    <AnimatePresence>
                        {useralreadyexist && (
                            <Loading loading="User already your contact" />
                        )}
                    </AnimatePresence>
                </>
                <AnimatePresence>
                    {contact && (
                        <Modal onClick={setcontact}>
                            <div className="flex items-center px-18 text-center gap-4 flex-col p-4">
                                <img
                                    src={
                                        import.meta.env.VITE_BASEURL +
                                        user?.profilepics
                                    }
                                    className="w-[4.5rem] object-cover h-[4.5rem] bg-red-500 rounded-full"
                                    alt="ProfilePics"
                                />
                                <div className="flex  text-white -space-y-1 flex-col">
                                    <span className="text-lg font-semibold">
                                        {user?.displayname}
                                    </span>
                                    <span className="text-gray-600">
                                        {user?.bio || "A bio"}
                                    </span>
                                    <span className="text-gray-400">
                                        {user?.location || "Location"}
                                    </span>
                                </div>
                                <button
                                    onClick={() => createcontact(user?.user)}
                                    className="bg-skyblue w-full px-12 hover:bg-sky-600/80 p-1 rounded-xl text-white"
                                >
                                    Add Contact
                                </button>
                                <button
                                    onClick={() => setcontact(false)}
                                    className="border-[1px] border-slate-500 hover:bg-[#aaaaaa1a]  w-full px-12 p-1 rounded-xl dark:text-white"
                                >
                                    Cancel
                                </button>
                            </div>
                        </Modal>
                    )}
                </AnimatePresence>
                <div
                    onClick={() => {
                        setcontact(true);
                    }}
                    className="flex md:px-3 p-2 text-base items-center space-x-4 md:space-x-5"
                >
                    <img
                        src={import.meta.env.VITE_BASEURL + user?.profilepics}
                        className="md:w-[3rem] object-cover w-[2.4rem] h-[2.4rem] md:h-[3rem] bg-red-500 rounded-full"
                        alt="#"
                    />
                    <div className="flex -space-y-1 flex-col">
                        <span className="text-lg md:font-semibold">
                            {user?.displayname}
                        </span>
                        <span className="text-gray-400 md:text-base text-sm">
                            {user?.bio || "A bio"}
                        </span>
                    </div>
                </div>
            </ExpandableCard>
        </>
    );
};

export default AddtoCaontactList;
