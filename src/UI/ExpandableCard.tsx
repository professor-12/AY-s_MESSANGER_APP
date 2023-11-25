import { motion } from "framer-motion";
const ExpandableCard = (props: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-xl pr-5  
            hover:bg-mutedcolor cursor-pointer"
        >
            {props.children}
        </motion.div>
    );
};

export default ExpandableCard;
