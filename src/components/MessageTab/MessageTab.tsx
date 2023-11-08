
import { Outlet } from "react-router-dom";
const MessageTab = () => {

    return <div className=" bg-primary w-full">
        <Outlet></Outlet>
    </div>;
};
export default MessageTab;
