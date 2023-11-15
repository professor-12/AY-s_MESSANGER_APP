import { useContextApi } from "../../store/contextApi/store"
const ChatHeader = () => {
  const { friendprofile } = useContextApi()
  const { profilepics, displayname } = friendprofile
  
  return (
        <div className='absolute  top-0  p-7 py-5 left-0 dark:bg-primary  right-0 bg-white dark:border-none border-b flex items-center space-x-2'>
              <img className="w-12 h-12 object-cover rounded-full mr-2" src={import.meta.env.VITE_BASEURL + profilepics} alt="" />
      <h1 className="text-xl ">{ displayname}</h1>
              
    </div>
  )
}

export default ChatHeader