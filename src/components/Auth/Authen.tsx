import Signup from "./Signup";
import { motion } from "framer-motion";
import { redirect, useSearchParams } from "react-router-dom";
import Login from "./Login";
const Auth = () => {
    const [params] = useSearchParams();
    const mode = params.get("mode");
    return (
        <motion.div className="flex justify-center overflow-hidden flex-col min-h-screen   dark:bg-primary">
            <div className="md:overflow-hidden p-3  md:w-[60%] lg:w-[25%]  mx-auto  dark:text-white items-center flex flex-col justify-center">
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
    if (mode == "signup") {
        const res = await fetch(
            import.meta.env.VITE_BASEURL + "/" + mode + "/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data),
            }
        );    
        if (!res.ok) {
            return res;
        } else {
            const user = await res.json();
            localStorage.setItem("usercredentialstokenACMESSANGER", user.token);
            const userProfile = JSON.stringify(user.profile);
            localStorage.setItem("userprofile", userProfile);
            return redirect("/");
        }
    }
    const res = await fetch(import.meta.env.VITE_BASEURL + "/login" + "/", {
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
            const user = await res.json();
            localStorage.setItem("usercredentialstokenACMESSANGER", user.token);
            const userProfile = JSON.stringify(user.profile);
            localStorage.setItem("userprofile", userProfile);
            return redirect("/");
        case 500:
            return redirect("/auth");
    }
};
