import { AnimatePresence, motion } from "framer-motion";
import { useContextApi } from "../../store/contextApi/store";
import arrow from "../../assets/svgs/Arrow.svg";
import email from "../../assets/svgs/email.svg";
import location from "../../assets/svgs/location.svg";
import ExpandableCard from "../../UI/ExpandableCard";
import Modal from "../Modal/Modal";
import Pusher from "pusher-js";
import { FormEvent, useEffect } from "react";
import { useState, useRef, RefObject } from "react";
import Loading from "../Loading/Loading";

const Profile = () =>  {
    const { setprofile } = useContextApi();
    useEffect(() => {
        var pusher = new Pusher("ceffb5697c2e0be737f8", {
            cluster: "mt1",
        });
        var channel = pusher.subscribe("chat");
        channel.bind("profile", function (data: any) {
            setprofile(data);
            localStorage.setItem("userprofile", JSON.stringify(data))
        });
    }, []);
    const fileref = useRef() as RefObject<HTMLInputElement>;
    const formData = new FormData();
    const { setSelected, profile } = useContextApi();
    const upload = () => {
        formData.append("Bio", profile.bio);
        formData.append("displayname", profile.displayname);
        formData.append("location", profile.location);
        if (
            fileref.current &&
            fileref.current.files &&
            fileref.current.files[0]
        ) {
            formData.append("profilepics", fileref.current.files[0]);
        }
        setisubmitting(true);
        fetch("http://127.0.0.1:8000/editprofile", {
            method: "PUT",
            headers: {
                Authorization:
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
            },
            body: formData,
        });
        setisubmitting(false);
    };
    const [displayname, setdisplayname] = useState(profile.displayname);
    const [Bio, setBio] = useState(profile.bio);
    const [Location, setLocation] = useState(profile.location);
    const [displayModal, setDisplayModal] = useState(false);
    const [issubmitting, setisubmitting] = useState(false);
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (
            displayname.trim().length == 0 &&
            Bio.trim.length == 0 &&
            Location.trim.length == 0
        )
            return;
        setisubmitting(true);
        fetch("http://127.0.0.1:8000/editprofile", {
            method: "PUT",
            headers: {
                Authorization:
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bio: Bio,
                location: Location,
                displayname: displayname,
                user: profile.displayname,
            }),
        }).then((res) => res.json());
        setisubmitting(false);
        setDisplayModal(false);
    }
    return (
        <>
            {issubmitting && <Loading loading="Updating Profile" />}
            <motion.div
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 },
                }}
                transition={{
                    type: "just",
                }}
                animate="visible"
                initial="hidden"
                className=""
            >
                {issubmitting && <Loading loading="Saving" />}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg pr-5  
            hover:bg-mutedcolor"
                >
                    <div
                        onClick={() => {
                            setSelected("Chats");
                        }}
                        className="flex p-2 px-3 cursor-pointer space-x-3"
                    >
                        <img src={arrow} className="" alt="" />
                        <p>My Profile</p>
                    </div>
                </motion.div>

                <div className="flex items-center mt-9 flex-col space-y-2">
                    <input
                        type="file"
                        id="profilepics"
                        ref={fileref}
                        onChange={upload}
                        accept="image/"
                        size={2}
                        name="profilepics"
                        className="w-20 h-20 file:cursor-pointer opacity-0 peer:hover:bg-red-500  bg-red-100 rounded-full top-[6.8rem] cursor-pointer absolute"
                    />
                    <img
                        src={import.meta.env.VITE_BASEURL + profile.profilepics}
                        alt="#"
                        className="w-20 bg-red-400 h-20 rounded-full peer cursor-pointer object-cover"
                    />
                    <div className="flex flex-col text-center">
                        <span className="text-xl">{profile.displayname}</span>
                        <span>{profile?.bio || ""}</span>
                    </div>
                </div>

                <div className="mt-9">
                    <div className="dark:bg-mutedcolor  h-[1.4px] bg-primary/10" />
                    <ExpandableCard>
                        <div className="p-3 mt-5 flex space-x-4">
                            <img src={email} alt="" />
                            <p>{profile.email}</p>
                        </div>
                    </ExpandableCard>
                    <ExpandableCard>
                        <div className="p-3 flex space-x-4">
                            <img src={location} alt="" />
                            <p>{profile.location}</p>
                        </div>
                    </ExpandableCard>
                </div>
                <motion.div
                    whileTap={{ scale: 1 }}
                    onClick={() => setDisplayModal(true)}
                    whileHover={{ scale: 1.01 }}
                    className="bg-blue-600/80 py-2 mt-2  text-center cursor-pointer font-[400] p-3 rounded-xl text-white"
                >
                    Edit info
                </motion.div>
                <AnimatePresence>
                    {displayModal && (
                        <Modal onClick={setDisplayModal}>
                            <h1 className="dark:text-white text-xl text-center mb-4">
                                Edit information
                            </h1>

                            <form
                                onSubmit={(e) => handleSubmit(e)}
                                className="space-y-4 w-[18rem] p-4"
                            >
                                <div className="flex-col flex  dark:text-white space-y-3">
                                    <label
                                        htmlFor="name"
                                        className="font-medium"
                                    >
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setdisplayname(e.target.value);
                                        }}
                                        value={displayname}
                                        className="border p-1 bg-transparent dark:border-white
                                    border-slate-300 rounded-lg w-full"
                                    />
                                </div>
                                <div className="flex-col flex dark:text-white space-y-3">
                                    <label htmlFor="name" className="text-lg">
                                        Bio
                                    </label>
                                    <input
                                        value={Bio}
                                        type="text"
                                        className="border p-1 bg-transparent dark:border-white
                                    border-slate-300 rounded-lg w-full"
                                        onChange={(e) => {
                                            setBio(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="flex-col flex dark:text-white space-y-3">
                                    <label htmlFor="name" className="text-lg">
                                        Location
                                    </label>
                                    <input
                                        value={Location}
                                        onChange={(e) => {
                                            setLocation(e.target.value);
                                        }}
                                        type="text"
                                        className="border px-2 p-1 bg-transparent dark:border-white
                                    border-slate-300 rounded-lg w-full"
                                    />
                                </div>
                                <motion.button
                                    disabled={issubmitting}
                                    whileTap={{ scale: 1 }}
                                    whileHover={{ scale: 1.01 }}
                                    className="bg-blue-500/90 py-2 mt-2  text-center cursor-pointer text-white  font-[400] p-3 w-full rounded-xl"
                                >
                                    {issubmitting ? "Saving" : "Save"}
                                </motion.button>
                            </form>
                        </Modal>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Profile;
