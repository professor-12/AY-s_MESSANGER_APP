import { motion } from "framer-motion";
const Loading = (props: any) => {
    return (
        <motion.div
            animate={{ y: [-20, 5] }}
            exit={{y: -20 , opacity: 0}}
            className="dark:bg-white bg-secondary text-white rounded-xl px-4 p-2 mx-auto space-x-3  dark:text-black items-center absolute top-2 left-[45%] z-10  flex "
        >
            <span className="animate-spin bg-black  w-4 h-4 rounded-full grid items-center justify-center border-r-black">
                <span className="bg-white h-3 w-3 "></span>
            </span>
            <span>{props.loading}</span>
        </motion.div>
    );
};

export default Loading;
