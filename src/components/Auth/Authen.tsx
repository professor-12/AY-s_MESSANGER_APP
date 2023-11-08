import Signup from "./Signup";
import { motion } from "framer-motion";
import { redirect, useSearchParams } from "react-router-dom";
import Login from "./Login";
const Auth = () => {
    const [params] = useSearchParams();
    const mode = params.get("mode");
    return (
        <motion.div className="h-screen flex justify-center flex-col  bg-primary">
            <div className="overflow-hidden  w-[80%] md:w-[60%] lg:w-[30%]  mx-auto  text-white items-center flex flex-col justify-center ">
                {mode === "signup" ? <Signup /> : <Login />}
            </div>
        </motion.div>
    );
};

export default Auth;

export const Loader = async ({ request }: any) => {
    const mode = new URL(request.url).searchParams.get("mode") || "login";
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

    if (mode == "login") {
        const res = await fetch("http://127.0.0.1:8000/" + mode + "/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Login),
        });
        const constt = await res.json();
        console.log(constt);
        localStorage.setItem("user", constt.user);
        localStorage.setItem("usercredentialstokenACMESSANGER", constt.token);
        return redirect("/");
    }
    const res = await fetch("http://127.0.0.1:8000/" + mode + "/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
    });
    const constt = await res.json();
    console.log(constt);
    localStorage.setItem("usercredentialstokenACMESSANGER", constt.token);
    return redirect("/");
};
