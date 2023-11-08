"use client";
import ExpandableCard from "../../UI/ExpandableCard";

const AddtoCaontactList = ({ user }: any) => {
    const createcontact = (contact:any) => {
        fetch("http://127.0.0.1:8000/contactcreation/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization':
                    "Token " +
                    localStorage.getItem("usercredentialstokenACMESSANGER"),
            },
            body: JSON.stringify({ contact: contact }),
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
        });

    };
    return (
        <>
            <ExpandableCard>
                <div onClick={()=> {createcontact(user?.displayname)}} className="flex  px-4 p-2  items-center space-x-5">
                    <img
                        src={import.meta.env.VITE_BASEURL + user?.profilepics}
                        className="w-[3rem] object-cover h-[3rem] bg-red-500 rounded-full"
                        alt="#"
                    />
                    <div className="flex -space-y-1 flex-col">
                        <span className="text-lg font-semibold">
                            {user?.displayname}
                        </span>
                        <span className="text-gray-400">
                            {user?.bio || "A bio"}
                        </span>
                    </div>
                </div>
            </ExpandableCard>
        </>
    );
};

export default AddtoCaontactList;
