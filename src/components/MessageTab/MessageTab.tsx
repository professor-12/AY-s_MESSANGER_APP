
import { Outlet } from "react-router-dom";
const MessageTab = () => {

    return <div className="dark:bg-primary bg-white w-full">
        <Outlet></Outlet>
    </div>
};
export default MessageTab;
