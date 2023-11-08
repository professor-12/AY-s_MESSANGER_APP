import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Link, Form } from "react-router-dom";
import { useSubmit } from "react-router-dom";

import HidePassword from "../../assets/svgs/HidePassword";
const Signup = () => {
    const submit = useSubmit();
    const [email, setemail] = useState({ value: "", touched: false });
    const [name, setname] = useState({ value: "", touched: false });
    const [Password, setpassword] = useState({ value: "", touched: false });
    const [cPassword, setcpassword] = useState({ value: "", touched: false });

    let emailisvalid = email.value.includes("@");
    let nameisvalid = name.value.trim().length > 5;
    let Passwordisvalid = Password.value.trim().length > 8;
    let cpassword =
        Password.value == cPassword.value && cPassword.value.trim().length > 8;

    let emailhaserror = !emailisvalid && email.touched;
    let namehaserror = !nameisvalid && name.touched;
    let Passwordhaserror = !Passwordisvalid && Password.touched;
    let cpasswordhaserror = !cpassword && cPassword.touched;
    const formisvalid =
        emailisvalid && Passwordisvalid && nameisvalid && cpassword;
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setemail((prev) => ({ ...prev, touched: true }));
        setname((prev) => ({ ...prev, touched: true }));
        setpassword((prev) => ({ ...prev, touched: true }));
        setcpassword((prev) => ({ ...prev, touched: true }));
        e.preventDefault();
        if (!formisvalid)
            return;
        submit({username: name.value, email: email.value,password: Password.value }, { method: "post"  });
        alert("S")
        setemail({ value: "", touched: false });
        setname({ value: "", touched: false });
        setcpassword({ value: "", touched: false });
        setpassword({ value: "", touched: false });
    };

    return (
        <Form
    
            onSubmit={(e) => {
                handleSubmit(e);
            }}
            className="w-full "
        >
            <motion.div
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ type: "just" }}
                className="flex p-2 space-y-6 w-full flex-col justify-center items-center  "
            >
                <div className="text-center ">
                    <p className="text-3xl font-semibold ">Create account</p>
                    <p className="text-[#92a9a2] text-base">Fill up the form</p>
                </div>
                <div className="space-y-5  w-full flex flex-col">
                    <div className="space-y-3">
                        <label htmlFor="">Email</label>
                        <input
                            value={email.value}
                            onChange={(e) =>
                                setemail((prev) => ({
                                    ...prev,
                                    value: e.target.value,
                                }))
                            }
                            onBlur={() => {
                                setemail((prev) => ({
                                    ...prev,
                                    touched: true,
                                }));
                            }}
                            type="email"
                            className={`border ${
                                emailhaserror && "border-red-600"
                            } bg-transparent  min-w-full p-3 rounded-xl focus:outline-none hover:border-blue-700 placeholder:text-slate-400 placeholder:text-lg`}
                            placeholder="e.g example@email.com"
                        />
                        {emailhaserror && (
                            <p className="text-sm text-gray-400">
                                Should be a valid email.
                            </p>
                        )}
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="">Display Name</label>
                        <input
                            value={name.value}
                            type="text"
                            onChange={(e) =>
                                setname((prev) => ({
                                    ...prev,
                                    value: e.target.value,
                                }))
                            }
                            onBlur={(e) => {
                                setname((prev) => ({
                                    ...prev,
                                    touched: true,
                                }));
                            }}
                            placeholder="e.g example123"
                            className={`border ${
                                namehaserror && "border-red-600"
                            } bg-transparent  min-w-full p-3 rounded-xl focus:outline-none hover:border-blue-700 placeholder:text-slate-400 placeholder:text-lg`}
                        />
                        {namehaserror && (
                            <p className="text-sm text-gray-400">
                                Maximum of 18 Letters. Hyphen, Spaces and
                                underscore are allowed
                            </p>
                        )}
                    </div>
                    <div className="space-y-3">
                        <label
                            className="flex items-center space-x-3"
                            htmlFor=""
                        >
                            <span>Password</span>
                            <HidePassword />
                        </label>
                        <input
                            value={Password.value}
                            onChange={(e) =>
                                setpassword((prev) => ({
                                    ...prev,
                                    value: e.target.value,
                                }))
                            }
                            onBlur={(e) => {
                                setpassword((prev) => ({
                                    ...prev,
                                    touched: true,
                                }));
                            }}
                            type="password"
                            placeholder="*********"
                            className={`border ${
                                Passwordhaserror && "border-red-600"
                            } bg-transparent  min-w-full p-3 rounded-xl focus:outline-none hover:border-blue-700 placeholder:text-slate-400 placeholder:text-lg`}
                        />
                        {Passwordhaserror && (
                            <p className="text-sm text-gray-400">
                                8 to 24 characters and must include upper and
                                lower case characters.
                            </p>
                        )}
                    </div>
                    <div className="space-y-3">
                        <label
                            className="flex items-center space-x-3 hover:border-blue-700"
                            htmlFor=""
                        >
                            <span>Confirm Password</span>
                            <span>
                                <HidePassword />
                            </span>
                        </label>
                        <input
                            value={cPassword.value}
                            onChange={(e) =>
                                setcpassword((prev) => ({
                                    ...prev,
                                    value: e.target.value,
                                }))
                            }
                            onBlur={(e) => {
                                setcpassword((prev) => ({
                                    ...prev,
                                    touched: true,
                                }));
                            }}
                            type="password"
                            placeholder="*********"
                            className={`border ${
                                cpasswordhaserror && "border-red-600"
                            } bg-transparent  min-w-full p-3 rounded-xl focus:outline-none hover:border-blue-700 placeholder:text-slate-400 placeholder:text-lg`}
                        />
                        {Passwordhaserror && (
                            <p className="text-sm text-gray-400">
                                Should match the first password
                            </p>
                        )}
                    </div>
                    <motion.button
                        type="submit"
                        disabled={!formisvalid}

                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="bg-blue-500 p-3 disabled:bg-gray-500 disabled:cursor-not-allowed  rounded-xl text-white text-center focus:outline-none"
                    >
                        Sign up
                    </motion.button>
                </div>
            </motion.div>
            <div className="text-slate-500 ml-4 text-base w-full">
                Already have an account?{" "}
                <Link  to={"/auth?mode=Login"} className="text-blue-500">
                    Login
                </Link>
            </div>
        </Form>
    );
};

export default Signup;
