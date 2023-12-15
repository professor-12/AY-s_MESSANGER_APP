import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import {
    Link,
    Form,
    useSubmit,
    useActionData,
    useNavigation,
} from "react-router-dom";

import Loading from "../Loading/Loading";
const Login = () => {
    const [showpassword, setshowpassord] = useState(false);
    const submitting = useNavigation();
    const issubmitting = submitting.state == "submitting";
    const error = useActionData() as any;
    const submit = useSubmit();
    const [name, setname] = useState({ value: "", touched: false });
    const [Password, setpassword] = useState({ value: "", touched: false });

    let nameisvalid = name.value.trim().length > 0;
    let Passwordisvalid = Password.value.trim().length > 0;
    let namehaserror = !nameisvalid && name.touched;
    let Passwordhaserror = !Passwordisvalid && Password.touched;
    const formisvalid = nameisvalid && Passwordisvalid;
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setname((prev) => ({ ...prev, touched: true }));
        setpassword((prev) => ({ ...prev, touched: true }));
        e.preventDefault();
        if (!formisvalid) return;
        submit(
            {
                name: name.value,
                password: Password.value,
            },
            { method: "post" }
        );
    };
    return (
        <Form className="w-full" onSubmit={(e) => handleSubmit(e)}>
            {issubmitting && <Loading loading="signing in"></Loading>}
            <motion.div
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ type: "just" }}
                className="flex p-2 space-y-5 w-full flex-col justify-center items-center"
            >
                <div className="text-center ">
                    <p className="text-3xl font-semibold ">ACMessenger</p>
                    <p className="text-[#92a9a2] text-base">
                        Login to your account
                    </p>

                    {error && (
                        <div className="bg-red-400 rounded p-2 my-5 text-red-900 text-lg  ring-red-400/50 ring-2">
                            Invalid Name or Password
                        </div>
                    )}
                </div>
                <div className="space-y-5   w-full flex flex-col">
                    <div className="space-y-3">
                        <label htmlFor="">Displayname</label>
                        <input
                            onChange={(e) => {
                                setname((prev) => ({
                                    ...prev,
                                    value: e.target.value,
                                }));
                            }}
                            onBlur={() => {
                                setname((prev) => ({
                                    ...prev,
                                    touched: true,
                                }));
                            }}
                            type="text"
                            className={`border bg-transparent ${
                                namehaserror && "border-red-600"
                            }  min-w-full p-[.6rem] px-8 rounded-xl focus:outline-none hover:border-blue-700 placeholder:text-slate-400 placeholder:text-lg `}
                            placeholder="e.g example@name.com"
                        />
                        {namehaserror && (
                            <p className="text-sm text-gray-400">
                                Should be a valid name.
                            </p>
                        )}
                    </div>

                    <div className="space-y-3">
                        <label
                            className="flex items-center space-x-3"
                            htmlFor=""
                        >
                            <span>Password</span>
                            <button
                                type="button"
                                onClick={() => setshowpassord((prev) => !prev)}
                            >
                                {showpassword ? (
                                    <IoMdEye></IoMdEye>
                                ) : (
                                    <IoMdEyeOff></IoMdEyeOff>
                                )}
                            </button>
                        </label>
                        <input
                            onChange={(e) => {
                                setpassword((prev) => ({
                                    ...prev,
                                    value: e.target.value,
                                }));
                            }}
                            onBlur={() => {
                                setpassword((prev) => ({
                                    ...prev,
                                    touched: true,
                                }));
                            }}
                            type={showpassword ? "text" : "password"}
                            placeholder="*********"
                            className={`bg-transparent ${
                                Passwordhaserror && "border-red-600"
                            } border min-w-full p-[.6rem] rounded-xl focus:outline-none hover:border-blue-700`}
                        />
                        {namehaserror && <p>Enter a value</p>}
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed p-3  rounded-xl text-white text-center focus:outline-none"
                    >
                        {issubmitting ? "Signing in" : "Sign in"}
                    </motion.button>
                </div>
            </motion.div>
            <div className="text-slate-400 mb-12 text-center text-base w-full">
                Don't have an account?{"  "}
                <Link
                    to={"/auth?mode=signup"}
                    className="text-blue-500 text-center"
                >
                    sign up.
                </Link>
            </div>
        </Form>
    );
};

export default Login;
