import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = (props: any) => {
    return createPortal(
        <div className="flex justify-center items-center">
            <motion.div
                exit={{ opacity: 0 }}
                onClick={() => props.onClick(false)}
                className="absolute bg-slate-200 dark:bg-slate-700  inset-0 dark:bg-opacity-30 bg-opacity-50 blur-2xl cursor-pointer"
            ></motion.div>
            <ModalContainer>{props.children}</ModalContainer>
        </div>,
        document.getElementById("portal") as HTMLElement
    );
};

export const ModalContainer = ({ children }: any) => {
    return (
        <motion.div
            animate={{ x: [-100, 0] }}
            exit={{ x: -100, opacity: [1, 0] }}
            className="dark:bg-[#0e0f2f] z-[500] bg-white absolute bottom-[20%]  flex flex-col rounded-xl p-3  h-auto"
        >
            {children}
        </motion.div>
    );
};

export default Modal;
