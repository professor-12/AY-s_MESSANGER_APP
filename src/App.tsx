import MessageTab from "./components/MessageTab/MessageTab"
import Sidebar from "./components/sideBar/Sidebar"
import Tab from "./components/Tabs/Tab"

function App() {
  return (
    <>
      <div className="flex h-screen text-white bg-secondary">
        <Sidebar />
        <Tab/>
        <MessageTab></MessageTab>

      </div>
    </>
  )
}

export default App
