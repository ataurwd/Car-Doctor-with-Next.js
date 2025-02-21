import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image 
          src="/assets/login/login.gif" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-r-lg" 
          alt="Login"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome Back</h2>
          <p className="text-gray-500 text-center mt-2">Sign in to continue</p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-300" placeholder="Enter your email" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input type="password" className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-300" placeholder="Enter your password" />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-main font-semibold text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-main text-white font-semibold py-3 rounded-lg hover:bg-main transition">
              Login
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>

          <button className="flex items-center justify-center w-full border py-3 rounded-lg hover:bg-gray-100 transition">
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-700 font-medium">Sign in with Google</span>
          </button>

          <p className="text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-main font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
