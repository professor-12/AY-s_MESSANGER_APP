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
    user_profile: string;
}
interface NavigatingTabs {
    isSelected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    profile: Profile;
    setprofile: Dispatch<SetStateAction<Profile>>;
}

const initialValue: NavigatingTabs = {
    isSelected: "Chats",
    setSelected: () => {},
    profile: {
        profilepics: "",
        email: "",
        displayname: "",
        user_profile: "",
    },
    setprofile: () => {},
};

const store = createContext(initialValue);

export const useContextApi = () => {
    return useContext(store);
};

const StoreProvider = (props: any) => {
    const [isSelected, setSelected] = useState("Chats");
    const [profile, setprofile] = useState<Profile>({
        profilepics: "",
        email: "",
        displayname: "",
        user_profile: "",
    });

    return (
        <store.Provider
            value={{ isSelected, setSelected, profile, setprofile }}
        >
            {props.children}
        </store.Provider>
    );
};

export default StoreProvider;
