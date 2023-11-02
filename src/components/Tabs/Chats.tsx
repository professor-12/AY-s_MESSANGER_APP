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
                hidden: { opacity: 0, x: -17 },
                visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
           
            animate="visible"
            transition={{ type: "just" }}
            className="space-y-5"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Chats</h1>
                <ul className="relative  flex space-x-7 ">
                    {data.map((i, index) => (
                        <li
                            onClick={() => {
                                setSelected(optionTab[index]);
                            }}
                            className=" group cursor-pointer"
                        >
                            <span className="text-gray-500">{i.img}</span>
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
