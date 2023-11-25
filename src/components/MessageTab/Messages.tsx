import { useState } from "react";
import { useContextApi } from "../../store/contextApi/store";
import { AnimatePresence, motion } from "framer-motion";
const Messages = ({ message }: any) => {
    const { friendprofile } = useContextApi();
    const style = message.reciever == friendprofile.user;
    const { profilepics } = friendprofile;
    const [expandimage, setexpandImage] = useState(false);

    function convertToHHMM(timeString: any) {
        const [hours, minutes, seconds] = timeString?.split(":");
        const formattedTime = new Date(
            0,
            0,
            0,
            hours,
            minutes,
            seconds
        ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return formattedTime;
    }

    const originalTime = message.time;
    const convertedTime = convertToHHMM(originalTime);
    return (
        <>
            <div className={`${style && "justify-end"} flex  w-full`}>
                <div className="text-black cursor-pointer flex    space-x-2  space-y-2">
                    {!style && (
                        <img
                            src={
                                import.meta.env.VITE_BASEURL + "/" + profilepics
                            }
                            className="h-12 w-12 object-cover rounded-full"
                            alt=""
                        />
                    )}

                
                    <div className="space-y-2">
                        {message?.message.trim().length > 0 ? (
                            <p
                                className={`md:max-w-[30rem]   p-2 px-3 ${
                                    style
                                        ? "bg-blue-400  text-white rounded-br rounded-3xl"
                                        : "rounded-bl   bg-white rounded-3xl"
                                } `}
                            >
                                {message?.message}
                            </p>
                        ) : (
                            <motion.div
                                className={` flex  
                        
                        text-white h-[20rem]  overflow-hidden p-1   rounded-3xl w-40 
                        `}
                            >
                                <img
                                    onClick={() =>
                                        setexpandImage((prev) => !prev)
                                    }
                                    className="rounded-3xl max-w-[30rem]  max-h-[30rem] z-[1000000] h-full w-full object-cover"
                                    src={
                                        import.meta.env.VITE_BASEURL +
                                        "/" +
                                        message.img
                                    }
                                    alt=""
                                />

                                    
                                <AnimatePresence>
                                    {expandimage && (
                                        <motion.img
                                            animate={{
                                                scale: [0, 1.001],
                                                x: style  ? [-500] : 0,
                                                y: style ? [0, -400] : [0,-400] ,
                                            }}
                                            exit={{
                                                scale: 1,
                                                x: 10,
                                                y: 10,
                                                opacity: 0,
                                            }}
                                            onClick={() =>
                                                setexpandImage((prev) => !prev)
                                            }
                                            className="rounded-3xl max-w-[30rem] absolute  max-h-[30rem] z-[1000000] h-full w-full object-cover"
                                            src={
                                                import.meta.env.VITE_BASEURL +
                                                "/" +
                                                message.img
                                            }
                                            alt=""
                                        />
                                    )}
                                </AnimatePresence>
                                {expandimage && (
                                    <motion.div
                                        onClick={() => setexpandImage(false)}
                                        exit={{ opacity: 0 }}
                                        className="absolute bg-slate-200 dark:bg-slate-700  inset-0 dark:bg-opacity-30 bg-opacity-50 cursor-pointer"
                                    ></motion.div>
                                )}
                            </motion.div>
                        )}
                        <div
                            className={`dark:text-slate-200 text-xs  ${
                                style ? "text-right" : "text-left"
                            }`}
                        >
                            {convertedTime}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messages;
