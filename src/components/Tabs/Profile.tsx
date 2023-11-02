import { motion } from "framer-motion";
const Profile = () => {
    return (
        <motion.div
            variants={{
                visible: { opacity: 1, x: 20 },
                hidden: { opacity: 0, x: 0 },
            }}
            transition={{
                type: "just",
            }}
            animate="visible"
            initial="hidden"
           
        >
            Profile
        </motion.div>
    );
};

export default Profile;
