import Profile from './Profile'
import Settings from './Settings'
import AddtoContact from './AddtoContact'
import Chats from './Chats'
import { useContextApi } from '../../store/contextApi/store'



const Tab = () => {
      const { isSelected } = useContextApi()
  return (
      <div className=' className="h-full border-[#383737]  p-10 pt-8 border-r min-w-[24.5%] bg-[#1b1b32]'>
          {isSelected === "Chats" && <Chats></Chats>}
          {isSelected === "profile" && <Profile></Profile>}
          {isSelected === "addContact" && <AddtoContact />}
          {isSelected === "settings" && <Settings></Settings>}
      </div>
  );
}

export default Tab