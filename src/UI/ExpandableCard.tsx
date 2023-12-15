import { motion } from "framer-motion";
const ExpandableCard = ({ children, Click = () => {} }: any) => {
    return (
        <motion.div
            onClick={Click()}
            whileHover={{ scale: 1.01 }}
            className="rounded-xl  md:pr-4  
            hover:bg-mutedcolor cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

export default ExpandableCard;
