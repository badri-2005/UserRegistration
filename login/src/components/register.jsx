import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth , db} from "./firebase"
import { Link } from 'react-router-dom';


import { setDoc,doc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const Register = () => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   console.log(fname, sname, email, password);

const handleregister=async(e)=>{
    e.preventDefault();
    try {
       await  createUserWithEmailAndPassword(auth,email,password);
       const user= auth.currentUser;
       console.log(user);
       if(user)
       {
        await setDoc(doc(db,"Users", user.uid),
        {
            email : user.email,
            firstname :fname,
            secondname : sname,
        })
       }
       console.log("User Register Successfully");
       toast.success("User Register Successfully",{
        position:"top-center"
       })
       
    } catch (error) {
        console.log(error.message);
        toast.error("Unable to Register",{
            position:"bottom-center"
        })
        
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={handleregister}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Signup</h1>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Second Name</label>
          <input
            type="text"
            placeholder="Enter Second Name"
            value={sname}
            onChange={(e) => setSname(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

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
          Register
        </button>

        <h3 className='text-right mt-3'>
              Existing User ! <Link to='/login'><span className='text-blue-600'>Login</span></Link>
              </h3>
      </form>
    </div>
  );
};

export default Register;
