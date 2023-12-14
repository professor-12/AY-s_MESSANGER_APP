import { motion } from "framer-motion";
const Loading = (props: any) => {
    return (
        <div className="fixed flex right-0 left-0 justify-center items-center top-0 p-2">
            <motion.div
                animate={{ y: [-20, 5] }}
                exit={{ y: -20, opacity: 0 }}
                className="dark:bg-white bg-secondary text-white rounded-xl px-4 p-2 mx-auto space-x-3  dark:text-black items-center left-[45%] z-100  flex "
            >
                <span className="animate-spin bg-black  w-4 h-4 rounded-full grid items-center justify-center border-r-black">
                    <span className="bg-white h-3 w-3 "></span>
                </span>
                <span>{props.loading}</span>
            </motion.div>
        </div>
    );
};

export default Loading;
