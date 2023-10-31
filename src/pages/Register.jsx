import React, { useState } from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , storage } from "../firebase" ;
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {

    const [err,setErr] = useState(false) 

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].value;

        // Copied from search-Firebase Signin with Email Password Docs
            // const auth = getAuth();

            // .then((userCredential) => {
            
            // const user = userCredential.user;

            //     console.log(user);

            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // ..
            // });

            try{
                 const res = await createUserWithEmailAndPassword(auth, email, password)

                 // Pasting after doc search-- upload image, storage fire base option-4 

                    const storageRef = ref(storage, displayName);

                    const uploadTask = uploadBytesResumable(storageRef, file);

                                // Register three observers:
                                // 1. 'state_changed' observer, called any time the state changes
                                // 2. Error observer, called on failure
                                // 3. Completion observer, called on successful completion

                    uploadTask.on('state_changed', 
                                // (snapshot) => {
                                //     // Observe state change events such as progress, pause, and resume
                                //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                //     console.log('Upload is ' + progress + '% done');
                                //     switch (snapshot.state) {
                                //     case 'paused':
                                //         console.log('Upload is paused');
                                //         break;
                                //     case 'running':
                                //         console.log('Upload is running');
                                //         break;
                                //     }
                                // }, 
                    (error) => {
                                // Handle unsuccessful uploads
                                setErr(true);
                    }, 
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                            await updateProfile(res.user,{
                                displayName,
                                photoURL: downloadURL,
                            });
                         await setDoc(doc(db , "users" , res.user.uid) , {
                                uid: res.user.uid ,    
                                displayName,
                                email,
                                photoURL: downloadURL 
                    })
                        });
                    }
                    );

                   
            }catch(err){
                setErr(true);
            }

    }

    return (
        <div className="formContainer">

            <div className="formWrapper">

                <span className="logo">TextAholic</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Display Name' />
                    <input type="email" placeholder='Email Address' name="" id="" />
                    <input type="password"  placeholder='Password' name="" id="" />
                    <input style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an Avatar</span>
                    </label>
                   <button>Sign Up</button>
                   {err && <span>Something Went Wrong</span>}

                </form>

                <p>Already Have an Account? Login </p>
            </div>

        </div>
    );
};

export default Register;