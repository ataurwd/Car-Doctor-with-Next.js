import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <div className="flex min-h-screen">
      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/assets/register/register.gif"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
          alt="Register"
        />
      </div>
      {/* Left Side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Create an Account
          </h2>
          <p className="text-gray-500 text-center mt-2">Join us today!</p>
          <RegisterForm />

          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a href="#" className="text-main font-semibold hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
