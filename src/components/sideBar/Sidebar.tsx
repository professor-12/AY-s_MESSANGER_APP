import { ToolTipData } from "../../Data/SidebarData";
import { useContextApi } from "../../store/contextApi/store";
const Sidebar = () => {
      const { setSelected } = useContextApi()
    const tooltipdata = ToolTipData;
    return (
        <div className="min-w-[5rem] fixed bottom-2 right-0 left-0 md:static md:justify-start justify-center items-center space-x-5 md:space-x-0  space-y-4 flex md:flex-col  md:py-12">
            {tooltipdata.map((tooltip) => (
                <div
                    onClick={() => {
                        setSelected(tooltip.tooltip);
                    }}
                    className="relative group cursor-pointer hover:bg-[#3b3b5f] rounded-lg p-3"
                >
                    <div className="text-gray-400">{tooltip.img}</div>
                    <div className="absolute md:-left-3 md:w-1 rounded md:top-[.3rem] bg-[#c7c7ff] md:h-[80%] h-[4px] left-2 -bottom-2 w-[80%]"></div>
                    <div className="bg-white md:group-hover:opacity-100 duration-150 opacity-0 top-1 left-[4.5rem]  p-2 px-3  rounded-lg absolute  text-sm text-black">
                        {tooltip.tooltip}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
