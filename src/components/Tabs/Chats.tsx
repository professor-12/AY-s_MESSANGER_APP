import { ChatData as Data } from "../../Data/ChatData";
import { useContextApi } from "../../store/contextApi/store";
import {motion} from "framer-motion"
import ChatLists from "./ChatList";

const Chats = () => {
    const { setSelected } = useContextApi();
    const optionTab = ["addContact", "group"];
    const data = Data;
    return (
        <motion.div
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -17 },
                exit: { opacity: 0, x: 17},
            }}
            initial="hidden"
            exit="hidden"
            animate="visible"
            transition={{ type: "just"}}
            className="space-y-3 min-h-screen overflow-y-auto"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Chats</h1>
                <ul className="relative  flex ">
                    {data.map((i, index) => (
                        <li
                            key={i.tooltip}
                            onClick={() => {
                                setSelected(optionTab[index])
                            }}
                            className="group hover:dark:bg-mutedcolor rounded-lg p-3 cursor-pointer"
                        >
                            <span className="text-slate-700  dark:text-gray-400">{i.img}</span>
                            <div
                                className="bg-white md:group-hover:flex duration-150 hidden top-10  p-2 px-3 
                                mr-12
                            rounded-lg absolute  text-sm text-black"
                            >
                                {i.tooltip}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ChatLists></ChatLists>
            </div>
        </motion.div>
    );
};

export default Chats;
