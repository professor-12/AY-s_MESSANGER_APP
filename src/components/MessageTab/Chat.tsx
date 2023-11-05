import ChatHeader from "./ChatHeader";
import send from "../../assets/svgs/Send.svg"
import File from '../../assets/svgs/File.svg'
const Chat = () => (
    <div className="relative w-full h-screen bg-secondary">
        <ChatHeader />
        <form className="h-screen pt-20 ">
                  <div className="flex pl-4 items-center overflow-hidden px-3 space-x-5 bg-primary right-12 left-12  m-3 rounded-full absolute bottom-12">
                        <input type="file" className="opacity-0 absolute left-10 w-5"/>
                <img src={File} alt="" />
                <input
                    className="bg-transparent focus:outline-none py-5 text-slate-300 min-w-0 flex-1"
                    placeholder="Message Here"
                    type="text"
                />
                <button className="bg-[#3b82f6] p-2 rounded-full">
                    <img src={send} alt="" />
                </button>
            </div>
        </form>
    </div>
);

export default Chat;
