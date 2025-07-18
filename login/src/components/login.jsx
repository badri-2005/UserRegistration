import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {auth} from './firebase'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useNavigate();

//   console.log(email, password);

  const handleLogin=async (e)=>{
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth,email,password)
        console.log("User Logged in Successfully");
        location('/profile')
        toast.success("Logged In",{
            position:"top-center"
        })
        
    } catch (error) {
        console.log(error.message)
        toast.error("Recheck the Details",{
            position:"bottom-center"
        })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>

        <h3 className='text-right mt-3'>
              New User ?<Link to='/register'><span className='text-blue-600'>Register Here</span></Link>
              </h3>

      </form>
    </div>
  );
};

export default Login;
