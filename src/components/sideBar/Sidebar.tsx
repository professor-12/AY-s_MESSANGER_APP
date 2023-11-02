import { ToolTipData } from "../../Data/SidebarData";
import { useContextApi } from "../../store/contextApi/store";
import { motion } from "framer-motion"
const Sidebar = () => {
    const { setSelected, isSelected } = useContextApi();
    const tooltipdata = ToolTipData;
    return (
        <motion.div className="min-w-[5rem] fixed bottom-2 right-0 left-0 md:static md:justify-start justify-center items-center space-x-5 md:space-x-0  space-y-4 flex md:flex-col  md:py-12">
            {tooltipdata.map((tooltip, i) => (
                <div
                    onClick={() => {
                        setSelected(tooltip.tooltip);
                    }}
                    className={`relative group cursor-pointer hover:bg-[#3b3b5f] rounded-lg p-3 ${
                        isSelected === tooltip.tooltip && i > 0 && "bg-[#3b3b5f]"
                    } `}
                >
                    <div className="text-gray-400">{tooltip.img}</div>
                    <div
                        
                        className={`absolute  md:-left-3 md:w-1 rounded md:top-[.3rem] bg-[#79ad9e] md:h-[80%] h-[4px] left-2 -bottom-2 w-[80%] ${
                            isSelected === tooltip.tooltip ? i !==  0  && "flex" : "hidden" 
                        }`}
                    ></div>
                    <div className="bg-white z-20 md:group-hover:flex duration-150 hidden top-1 left-[4.5rem]  p-2 px-3  rounded-lg absolute  text-sm text-black">
                        {tooltip.tooltip}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default Sidebar;
