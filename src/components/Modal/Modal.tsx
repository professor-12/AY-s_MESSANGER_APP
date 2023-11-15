import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = (props: any) => {
    return createPortal(
        <div className="flex justify-center items-center">
                <motion.div
                      exit={{opacity:0}}
                onClick={() => props.onClick(false)}
                className="absolute bg-slate-100 dark:bg-slate-700 inset-0 dark:bg-opacity-30 bg-opacity-10"
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
                exit={{opacity:[1,0],x:-100} }
            className="dark:bg-[#0e0f2f] bg-white absolute bottom-[20%]  flex flex-col rounded-xl p-3  h-auto"
        >   {children}
        </motion.div>
    );
};

export default Modal;
