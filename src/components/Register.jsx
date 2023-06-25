
const Register = () => {
    const formLabelStyle = "font-semibold text-gray-600";
    const formInputStyle =
      "mt-2 pl-4 w-[18rem] h-[2.5rem] rounded border-[1px] border-gray-300 bg-transparent outline-none";
  return (
    <div className="h-auto mt-8 w-full grid place-content-center mb-8">
      <div className="w-[28rem] h-[32rem] rounded flex flex-col items-center justify-between pt-8 pb-4" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="w-[90%] grid  place-content-center  gap-2">
          <div className="flex flex-row space-x-2 pl-4">
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/128/7794/7794196.png"
              alt="select items"
            />
            <h1 className="text-2xl font-bold tracking-wide text-gray-800">
              Create your account
            </h1>
          </div>

          <p className="tracking-wider text-gray-500 text-lg">
            Let's get started your reading journey
          </p>
        </div>

        <form className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label className={formLabelStyle}>
              Name <span className="text-red-600">*</span>
            </label>
            <input
              className={formInputStyle}
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label className={formLabelStyle}>
              Email<span className="text-red-600">*</span>
            </label>
            <input
              className={formInputStyle}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label className={formLabelStyle}>
              Password <span className="text-red-600">*</span>
            </label>
            <input
              className={formInputStyle}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="w-[18rem] h-[2.5rem] bg-black text-white rounded mt-2 hover:bg-teal-400 transition duration-300 ease-in-out"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm tracking-wider text-gray-600">
          Already have an account?{" "}
          <span className="text-base font-semibold text-gray-900 cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;