"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";

export default function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  return (
    <section className="min-h-screen justify-center items-center">
      <Navbar />
      <div className="justify-center items-center align-middle flex font-abc text-5xl">
        <h1>Login</h1>
      </div>
      <div className="w-full justify-center items-center align-middle flex h-96">
        <form
          className=" bg-white shadow-md rounded px-16 pt-12 pb-12 mb-4 shadow-red-500 border-4 border-red-500"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 font-ghi"
              htmlFor="username"
            >
              Usuário:
            </label>
            <input
              className="appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 font-ghi"
              htmlFor="password"
            >
              Senha:
            </label>
            <input
              className="appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        
      </div>
      <div className="justify-center items-center align-middle flex font-abc ">
          <Link
          href="/">
            <button  >
                Esqueceu sua senha?
            </button>
          </Link>
        </div>
      <div className="mt-32">
        <Footer />
      </div>
    </section>
  );
}
