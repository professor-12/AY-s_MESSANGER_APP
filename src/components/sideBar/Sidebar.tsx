import { ToolTipData } from "../../Data/SidebarData";
import { useContextApi } from "../../store/contextApi/store";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
const Sidebar = () => {
    const data: any = useLoaderData();
    const { setprofile } = useContextApi();
    useEffect(() => {
        setprofile(data);
    }, []);
    const { setSelected, isSelected, profile } = useContextApi();
    const tooltipdata = ToolTipData;
    const BASE_URL = import.meta.env.VITE_BASEURL;
    return (
        <motion.div className="min-w-[4.6rem] fixed bottom-2 right-0 left-0 md:static md:justify-start justify-center items-center space-x-5 md:space-x-0  space-y-4 flex md:flex-col  md:py-12">
            <div className="relative group cursor-pointer mb-5">
                <img
                    loading="lazy"
                    className="h-12 w-12 object-cover rounded-full"
                    src={BASE_URL + profile?.profilepics}
                    alt="#"
                />
                <div className="bg-mutedcolor/20 -bottom-4   w-12 absolute h-[.9px]" />
                <div
                    className="dark:bg-white
                 z-20 md:group-hover:flex
                  bg-slate-600
                 duration-150 hidden top-1 left-[3.6rem]  p-2 px-3  rounded-lg absolute  text-sm dark:text-black"
                >
                    Profile
                </div>
            </div>
            {tooltipdata.map((tooltip) => (
                <div
                    key={tooltip.tooltip}
                    onClick={() => {
                        setSelected(tooltip?.tooltip);
                    }}
                    className={`relative group cursor-pointer hover:dark:bg-[#3b3b5f] hover:bg-mutedgray rounded-lg p-3 ${
                        isSelected === tooltip.tooltip && "dark:bg-[#3b3b5f] bg-mutedgray"
                    } `}
                >
                    <div className="text-slate-700 dark:text-gray-200">{tooltip?.img}</div>
                    <div
                        className={`absolute  md:-left-3 md:w-1 rounded md:top-[.3rem] bg-[#79ad9e] md:h-[80%] h-[4px] left-2 -bottom-2 w-[80%] ${
                            isSelected === tooltip?.tooltip ? "flex" : "hidden"
                        }`}
                    ></div>
                    <div className="dark:bg-white z-20 md:group-hover:flex
                    bg-slate-800 text-white duration-150 hidden top-1 left-[4.1rem]  p-2 px-3  rounded-lg absolute  text-sm dark:text-black">
                        {tooltip?.tooltip}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default Sidebar;
