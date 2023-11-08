import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

interface Profile {
    profilepics: string;
    email: string;
    displayname: string;
    user: String;
    user_profile: string;
}
interface NavigatingTabs {
    isSelected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    profile: Profile;
    setprofile: Dispatch<SetStateAction<Profile>>;
    friendprofile: Profile;
    setfriend_profile: Dispatch<SetStateAction<Profile>>;
}

const initialValue: NavigatingTabs = {
    isSelected: "Chats",
    setSelected: () => {},
    profile: {
        user: "",
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
    const [isSelected, setSelected] = useState("Chats");
    const [friendprofile, setfriend_profile] = useState<Profile>({
        profilepics: "",
        email: "",
        user: "",
        displayname: "",
        user_profile: "",
    });
    const [profile, setprofile] = useState<Profile>({
        profilepics: "",
        user: "",
        email: "",
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
            }}
        >
            {props.children}
        </store.Provider>
    );
};

export default StoreProvider;
