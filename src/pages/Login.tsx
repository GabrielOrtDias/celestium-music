import { useState } from "react";
import { Register } from "./Register";
import { Link } from "react-router-dom";

export function Login() {
  const [register, setRegister] = useState(false);
  return (
    <div className="bg-background h-screen w-screen flex items-center justify-center">
      {register ? (
        <Register setRegister={setRegister} />
      ) : (
        <form className="flex flex-col items-center w-full font-montserrat gap-2 text-primary">
          <img src="logo.png" className="w-2/6" />
          <input
            type="text"
            className="focus:outline-none px-2 rounded-lg h-8 w-4/6"
            placeholder="Username"
          />
          <input
            type="password"
            className="focus:outline-none px-2 rounded-lg h-8 w-4/6"
            placeholder="Password"
          />
          <Link to={"/"} className="w-full text-center">
            <button
              className="bg-primary text-white rounded-lg w-2/6 h-10"
              type="button"
            >
              Login
            </button>
          </Link>
          <span>
            Don't have an account?{" "}
            <button
              className="text-secondary"
              type="button"
              onClick={() => {
                setRegister(true);
              }}
            >
              Register
            </button>
          </span>
        </form>
      )}
    </div>
  );
}
