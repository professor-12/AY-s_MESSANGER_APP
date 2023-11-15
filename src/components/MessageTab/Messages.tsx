import { useContextApi } from "../../store/contextApi/store";
const Messages = ({ message }: any) => {
    const { friendprofile } = useContextApi();
    const style = message.reciever == friendprofile.user;
    const { profilepics } = friendprofile;

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
            <div className={`flex  ${style && "justify-end"} w-full`}>
                <div className="text-black cursor-pointer   flex space-x-2  space-y-2">
                    {!style && (
                        <img
                            src={
                                import.meta.env.VITE_BASEURL + "/" + profilepics
                            }
                            className="h-12 w-12 object-cover rounded-full"
                            alt="ddd"
                        />
                    )}
                    <div>
                        <div
                            className={` flex ${
                                style
                                    ? "bg-blue-400  text-white rounded-br min-h-12  p-2 px-3 rounded-3xl"
                                    : "rounded-bl min-h-12  bg-white p-2 px-3 rounded-3xl"
                            } `}
                        >
                            <p>{message?.message}</p>
                        </div>
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
