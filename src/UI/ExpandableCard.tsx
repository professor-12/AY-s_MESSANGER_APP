import { motion } from "framer-motion";
const ExpandableCard = (props: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg pr-5  
            hover:bg-mutedcolor cursor-pointer"
        >
            {props.children}
        </motion.div>
    );
};

export default ExpandableCard;
