import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const Signup = () => {
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

    const Signin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(
            (usecredentials) => {
                console.log(usecredentials);
            }
        );
      };
      
      
    return (
        <>
                <form
                      onSubmit={(e)=> {Signin(e) }}
                className="gap-12 flex flex-col items-center w-full"
                action=""
            >
                <p className="text-center block">Login</p>
                <input
                    onChange={(e) => {
                        setname(e.target.value);
                    }}
                    value={name}
                    type="text"
                    placeholder="Enter your name"
                />
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
                    name=""
                    id=""
                />
                <button>Login</button>
            </form>
        </>
    );
};

export default Signup;
