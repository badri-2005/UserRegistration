import React , {useState , useEffect} from 'react'
import {auth , db} from "./firebase";
import {doc,getDoc} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const profile = () => {
    

    const [userdetails , setUserdetails] = useState(null);

    const location = useNavigate();


    const fetchUserData=async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user);
            const docRef = doc(db , "Users" ,user.uid);
            const docsnap = await getDoc(docRef);
            if(docsnap.exists())
            {
                setUserdetails(docsnap.data())
                // console.log(docsnap.data());
                
            }
            else{
                console.log("User is not Logged In !");
                
            }
        })
    }

    useEffect(()=>{
        fetchUserData()
    },[])


    async function handleLogout(){
        try{
            await auth.signOut();
            location('/login');
            toast.success("Logging Out",{
                position:"top-center"
            })
        }
        catch(error){
            toast.error("Error Logging Out ",error.message)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {userdetails ? (
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Welcome, {userdetails.firstname}
          </h1>

          <div className="text-left mb-6 space-y-2">
            <p><span className="font-semibold">Email:</span> {userdetails.email}</p>
            <p><span className="font-semibold">First Name:</span> {userdetails.firstname}</p>
            <p><span className="font-semibold">Last Name:</span> {userdetails.secondname}</p>
          </div>

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
          onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p className="text-lg font-semibold text-gray-600 animate-pulse" >Loading...</p>
      )}
    </div>
  );
}

export default profile