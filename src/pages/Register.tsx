interface RegisterProps {
  setRegister: (value: boolean) => void;
}

export function Register({ setRegister }: RegisterProps) {
  return (
    <form className="flex flex-col items-center w-full font-montserrat gap-2 text-primary">
      <img src="logo.png" className="w-2/6" />
      <input
        type="text"
        className="focus:outline-none px-2 rounded-lg h-8 w-4/6"
        placeholder="Username"
      />
      <input
        type="email"
        className="focus:outline-none px-2 rounded-lg h-8 w-4/6"
        placeholder="Email"
      />
      <input
        type="password"
        className="focus:outline-none px-2 rounded-lg h-8 w-4/6"
        placeholder="Password"
      />
      <button className="bg-primary text-white rounded-lg w-2/6 h-10">
        Register
      </button>
      <span>
        Already have an account?{" "}
        <button
          className="text-secondary"
          type="button"
          onClick={() => {
            setRegister(false);
          }}
        >
          Login
        </button>
      </span>
    </form>
  );
}
