import Signup from "./Signup";
import { motion } from "framer-motion";
import {  redirect, useSearchParams } from "react-router-dom";
import Login from "./Login";
const Auth = () => {
    const [params] = useSearchParams();
    const mode = params.get("mode");
    return (
        <motion.div className="flex justify-center flex-col min-h-screen   dark:bg-primary">
            <div className="overflow-hidden  w-[70%] md:w-[60%] lg:w-[25%]  mx-auto  dark:text-white items-center flex flex-col justify-center ">
                {mode === "signup" ? <Signup /> : <Login />}
            </div>
        </motion.div>
    );
};

export default Auth;

export const Loader = async ({ request }: any) => {
    const mode = new URL(request.url).searchParams.get("mode") || "Login";
    const data = await request.formData();
    const Data = {
        username: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
    };
    const Login = {
        username: data.get("name"),
        password: data.get("password"),
    };

    if (mode == "Login") {
        const res = await fetch("http://127.0.0.1:8000/" + mode + "/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Login),
        });

        switch (res.status) {
            case 404:
                return res;
            case 200:
                const constt = await res.json();
                console.log(constt);
                localStorage.setItem("user", constt.user);
                localStorage.setItem(
                    "usercredentialstokenACMESSANGER",
                    constt.token
                );
                return redirect("/");
            default:
                return redirect("/auth");
        }

    

    }
    const res = await fetch("http://127.0.0.1:8000/" + mode + "/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
    });
    if (!res.ok) {
        return res;
    }
    const constt = await res.json();
    localStorage.setItem("usercredentialstokenACMESSANGER", constt.token);
    return redirect("/");
};
