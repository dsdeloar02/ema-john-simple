import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import app from "../../firebase/firebase.init";

const Register = () => {
    const auth = getAuth(app);
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);

  
    const onSubmitHandler = (event) => {
      setSuccess(false)
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.text.value;
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
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          setSuccess(true)
          form.reset();
          console.log(user);
          verifyEmail();
          updateUserProfile(name);
        })
        .cath( error => {
          console.log("error", error);
          setPasswordError(error.message)
        });   
    };

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then( () => {
            swal('Please', 'Check Your Email and Verify')
        })
    }

    const updateUserProfile = (name) => {
      updateProfile(auth.currentUser,{
        displayName : name
      })
      .then(() =>{
        // Profile UPdated
      })
      .catch( error => {
        console.error(error)
      })
  } 

   

  return (
    <div>
      <div className="container">
        <h3 className="text-center py-5"> Register Here</h3>

        <div className="my-4 w-1/2 mx-auto">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-6">
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                id="text"
                name="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your First Name"
              />
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
               
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
            <p className="mt-2 text-sm text-red-600 dark:text-red-500 font-bold">
              {passwordError}
            </p>
            {success && (
              <p className="mt-2 text-sm text-green-600 dark:text-red-500 font-bold">
                User Created Successfully
              </p>
            )}
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
            <p className="py-4">
              <small>
                Allready have an account ? Please {" "}
                <Link to="/login">Log in</Link>{" "}
              </small>
            </p>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Resgister
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
