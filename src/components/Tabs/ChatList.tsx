import ExpandableCard from "../../UI/ExpandableCard";
const ChatLists = () => {
    interface User {
        displayname: string;
        user_profile: string;
        date_joined: string;
        email: string;
        profilepics: string;
        id: number;
    }
    const Users: Array<User> = []
    return Users.map((chat) => (
        <ExpandableCard>
            <div
                className="flex p-3  cursor-pointer items-start  space-x-6"
                key={chat.id}
            >
                <div className="">
                    <img
                        className="h-[3.4rem] object-cover w-[3.4rem] rounded-full"
                        src={import.meta.env.VITE_BASEURL + chat?.profilepics}
                        alt="d"
                    />
                </div>
                <div className="flex  flex-col">
                    <h1 className="text-[1.4rem]">{chat?.displayname}</h1>
                    <div className="flex font-medium text-gray-400/80 text-sm space-x-3">
                        <p>{chat?.user_profile}</p>
                        <p>{chat?.id}</p>
                    </div>
                </div>
            </div>
        </ExpandableCard>
    ));
};

export default ChatLists;
