import React, { useState } from "react";
import './Login.css';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.init";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
const Login = () => {
  const auth = getAuth(app);
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail ] = useState('');

  const onSubmitHandler = (event) => {
    setSuccess(false)
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email, password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least one uppercase");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Your password must be at least 8 characters");
      return;
    }
    if (password.search(/[a-z]/i) < 0) {
      setPasswordError("Your password must contain at least one letter.");
      return;
    }
    if (password.search(/[0-9]/) < 0) {
      setPasswordError("Your password must contain at least one digit.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then( result => {
        const user = result.user;
        if(setSuccess){
          swal("Good job!", "Log In success")
        }
        form.reset();
        console.log(user);
        
      })
      .catch( error => {
        console.log("error", error.message);
        if((error.message)){
          setPasswordError('Password is Incorrect');
        } 
      });      
  };

  const handleBarEmail = event => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email)
  }

  const handleForgotPassword = () => {
      sendPasswordResetEmail(auth, userEmail)
      .then(() => {
          // pass reset 
          swal('For reset your password ', 'Check Your Email')
      })
      .catch((error) => {
        swal(error.error.message)
        // console.error(error)
      })
  }

  

  return (
    <div className="container">
      <h3 className="text-center py-5"> This is Log in Page </h3>

      <div className="my-4 w-1/2 mx-auto">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              onBlur={handleBarEmail}
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
            />
          </div>
            <p className="mt-2 pb-3 text-sm text-red-600 dark:text-red-500 font-bold">{passwordError}</p>
            {
                success && <p>Success</p>
            }
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
            <div className="flex justify-between align-middle py-4">
            <p className="" ><small>New to this website ? Please <Link to='/register' >Register</Link> </small></p>
            <p onClick={handleForgotPassword} ><Link>Forgot Password</Link></p>
            </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
