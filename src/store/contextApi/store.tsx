import { Dispatch, SetStateAction, createContext , useContext, useState   } from "react"

interface NavigatingTabs {
    isSelected: string,
    setSelected:Dispatch<SetStateAction<string>>
}

const initialValue: NavigatingTabs = {
      isSelected: "Chats",
      setSelected: () => {}
}


const store = createContext(initialValue)

export const useContextApi = () => {
    return useContext(store);
};

const StoreProvider = (props:any) => {
      const [isSelected, setSelected] = useState("Chats")

      return (
            <store.Provider value={{ isSelected, setSelected }}>
                  {props.children}
            </store.Provider>
      )

}

export default StoreProvider