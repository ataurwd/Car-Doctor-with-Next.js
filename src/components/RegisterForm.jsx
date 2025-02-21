"use client"
import React from "react";
import { FcGoogle } from "react-icons/fc";
import registerUser from "../app/actions/auth/registerUser";

const RegisterForm = () => {

  const handelRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const obj = { name, email, password }
    await registerUser(obj)
  }
  return (
    <div>
      <form onSubmit={handelRegister} className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            required
            name="name"
            type="text"
            className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input required
            name="email"
            type="email"
            className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input required
            name="password"
            type="password"
            className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your password"
          />
        </div>

        <button className="w-full bg-main text-white font-semibold py-3 rounded-lg hover:bg-main transition">
          Register
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
    </div>
  );
};

export default RegisterForm;
