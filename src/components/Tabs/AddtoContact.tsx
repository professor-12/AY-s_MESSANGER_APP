import Card from "../../UI/Card";
import AddtoCaontactList from "./AddtoCaontactList";
import { motion } from "framer-motion";
const AddtoContact = () => {
    return (
        <motion.div
            variants={{
                visible: { opacity: 1, x: 20 },
                hidden: { opacity: 0, x: 0 },
            }}
            transition={{ type: "just" }}
            animate="visible"
            initial="hidden"
            className="space-y-3"
        >
            <Card>
                <div className="flex p-1 space-x-2">
                    <span>arrow</span>
                    <p>Add Contact</p>
                </div>
            </Card>
            <form
                action=""
                className="overflow-hidden bg-secondary rounded-full w-full"
            >
                <input
                    className="rounded-full px-3 p-2 w-full bg-secondary focus:outline-white"
                    type="text"
                    placeholder="Search"
                />
            </form>
            <AddtoCaontactList />
        </motion.div>
    );
};

export default AddtoContact;
