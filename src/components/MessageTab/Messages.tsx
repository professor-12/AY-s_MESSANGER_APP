import { useContextApi } from "../../store/contextApi/store";
import {useEffect} from 'react'
const Messages = ({ message }: any) => {
    const { friendprofile, profile , setfriend_profile  } = useContextApi();
   useEffect(() => {
       fetch("http://127.0.0.1:8000/profile/", {
           method: "GET",
           headers: {
               "Content-Type": "application/json",
               Authorization:
                   "Token " +
                   localStorage.getItem("usercredentialstokenACMESSANGER"),
           },
       })
           .then((res) => {
               return res.json();
           })
           .then((profile) => {
               setfriend_profile(profile);
               alert(profile);
           });
   }, []);
    const style = message.sender == profile.user
    const { profilepics } = friendprofile;

    return (
        <>
             <div className={`flex ${style && 'justify-end'}  w-full`}>
                <div className="text-black cursor-pointer   flex space-x-2 spa ">
                    {

                    !style &&
                        <img
                            src={import.meta.env.VITE_BASEURL + "/" + profilepics}
                            className="h-12 w-12 object-cover rounded-full"
                            alt="ddd"
                        />
                    }
                    <div className={` ${style ? " bg-blue-400/90  text-white rounded-br" : "rounded-bl"} h-12 bg-white p-2 px-3 rounded-3xl`}>
                    <p>{message?.message}</p>
                </div>
            </div>
        </div>
        </>
       
    );
};

export default Messages;
