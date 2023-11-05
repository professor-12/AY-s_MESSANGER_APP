import { useState } from "react";
import {
    Auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";

const Signup = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const Signin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(
            (usecredentials) => {
                console.log(usecredentials.user);
            }
        );
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    Signin(e);
                }}
                className="gap-12 text-black flex flex-col items-center w-full"
                action=""
            >
                <p className="text-center block">Sign up</p>
               
                <input
                    onChange={(e) => {
                        setemail(e.target.value);
                    }}
                    value={email}
                    type="email"
                />
                <input
                    onChange={(e) => {
                        setpassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    
                />
                <button>Login</button>
            </form>
        </>
    );
};

export default Signup;
