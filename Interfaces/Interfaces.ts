import { Dispatch, SetStateAction } from "react";

export interface User {
        displayname: string;
        user_profile: string;
        date_joined: string;
        email: string;
        profilepics: string;
        id: number;
}
    


export interface Profile {
    profilepics: string;
    email: string;
    bio: string;
    location: string;
    displayname: string;
    user: String;
    user_profile: string;
}




export interface NavigatingTabs {
    tab: boolean
    settab:  Dispatch<SetStateAction<boolean>>
    isSelected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    profile: Profile;
    setprofile: Dispatch<SetStateAction<Profile>>;
    friendprofile: Profile;
    setfriend_profile: Dispatch<SetStateAction<Profile>>;
}
