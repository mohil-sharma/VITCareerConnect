import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import './index.css';

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center relative"
      >
      <h2 className="text-white text-2xl font-semibold mb-4">Welcome back!</h2>
        <input
          type="email"
          placeholder="name@work-email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 text-white bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-3 bg-gradient-to-r from-gray-400 to-orange-400 text-black font-bold rounded-lg shadow-lg hover:shadow-orange-400 transition"
        >
          SIGN IN 
        </motion.button>
        <div className="my-4 text-gray-400">OR</div>
        <div className="flex gap-4 justify-center">
          <button className="flex items-center gap-2 p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            <FaGoogle /> Sign in with Google
          </button>
          <button className="flex items-center gap-2 p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            <FaGithub /> Sign in with GitHub
          </button>
        </div>
        <p className="text-gray-400 mt-4">
          Don't have an account? <a href="#" className="text-purple-400 hover:underline">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}