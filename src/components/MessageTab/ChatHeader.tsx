import ExpandableCard from "../../UI/ExpandableCard";
import { useContextApi } from "../../store/contextApi/store";
import { AiOutlineArrowLeft } from "react-icons/ai";
const ChatHeader = () => {
    const { settab } = useContextApi();
    const { friendprofile } = useContextApi();
    const { profilepics, displayname } = friendprofile;
    return (
        <div className="absolute   md:justify-start  top-0 p-2  md:p-7 py-5 left-0 dark:bg-primary  right-0 bg-white dark:border-none border-b flex items-center space-x-2">
            <ExpandableCard>
                <div
                    onClick={() => settab(true)}
                    className="text-xl md:hidden p-3 text-center flex items-center justify-center"
                >
                    <AiOutlineArrowLeft className="dark:text-white text-primary" />
                </div>
            </ExpandableCard>
            <div className="flex items-center space-x-3">
                <img
                    className="md:w-12 h-9 w-9 md:h-12 object-cover rounded-full mr-2"
                    src={import.meta.env.VITE_BASEURL + profilepics}
                    alt=""
                />
                <h1 className="text-xl ">{displayname}</h1>
            </div>
        </div>
    );
};

export default ChatHeader;
