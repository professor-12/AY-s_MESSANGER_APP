import { Chatdata } from "../../Data/ChatsData";
import Card from "../../UI/Card";
const ChatLists = () => {
    const list = Chatdata;
    return list.map((chat) => (
        <Card>
            <div className="flex cursor-pointer items-start  space-x-6">
                <div className="">
                    <img className="h-[3.4rem] w-[3.4rem] rounded-full" src={`${chat.img}`} alt="" />
                </div>
                <div className="flex  flex-col">
                    <h1 className="text-[1.4rem]">{chat.displayname}</h1>
                    <div className="flex font-medium text-gray-500 text-sm space-x-3">
                        <p>{chat.username}</p>
                        <p>{chat.time}</p>
                    </div>
                </div>
            </div>
        </Card>
    ));
};

export default ChatLists;
