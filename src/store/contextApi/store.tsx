import { createContext, useContext, useState } from "react";

import { Profile, NavigatingTabs } from "../../../Interfaces/Interfaces";

const initialValue: NavigatingTabs = {
    tab: true,
    settab: () => {},
    isSelected: "Chats",
    setSelected: () => {},
    profile: {
        user: "",
        location: "",
        bio: "",
        profilepics: "",
        email: "",
        displayname: "",
        user_profile: "",
    },
    setprofile: () => {},
    friendprofile: {
        profilepics: "",
        email: "",
        user: "",
        location: "",
        bio: "",
        displayname: "",
        user_profile: "",
    },

    setfriend_profile: () => {},
};

const store = createContext(initialValue);

export const useContextApi = () => {
    return useContext(store);
};

const StoreProvider = (props: any) => {
    const [tab, settab] = useState(false);
    const [isSelected, setSelected] = useState("Chats");
    const [friendprofile, setfriend_profile] = useState<Profile>({
        profilepics: "",
        email: "",
        user: "",
        location: "",
        bio: "",
        displayname: "",
        user_profile: "",
    });
    const [profile, setprofile] = useState<Profile>({
        profilepics: "",
        email: "",
        user: "",
        location: "",
        bio: "",
        displayname: "",
        user_profile: "",
    });

    return (
        <store.Provider
            value={{
                isSelected,
                setSelected,
                profile,
                setprofile,
                friendprofile,
                setfriend_profile,
                tab,
                settab,
            }}
        >
            {props.children}
        </store.Provider>
    );
};

export default StoreProvider;
