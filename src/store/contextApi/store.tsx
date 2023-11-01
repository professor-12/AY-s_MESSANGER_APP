import { Dispatch, SetStateAction, createContext , useContext, useState   } from "react"

interface NavigatingTabs {
    isSelected: string,
    setSelected:Dispatch<SetStateAction<string>>
}

const initialValue: NavigatingTabs = {
      isSelected: "chats",
      setSelected: () => {}
}


const store = createContext(initialValue)

export const useContextApi = () => {
    return useContext(store);
};

const StoreProvider = (props:any) => {
      const [isSelected, setSelected] = useState("chats")

      return (
            <store.Provider value={{ isSelected, setSelected }}>
                  {props.children}
            </store.Provider>
      )

}

export default StoreProvider