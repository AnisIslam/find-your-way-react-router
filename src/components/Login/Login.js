import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

import googleIcon from '../../images/google.png'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);

}
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: "",
        email: "",
        password: "",
        photo: "",
        error: "",
        success: ""
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //go to login page from desired page after burden
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    //email pass submit auth functioanlities start
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {

            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {

            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        event.preventDefault();

    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log("user name update successfully", name);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleSignOut = () => {
        return firebase.auth().signOut()
            .then(result => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }

                return signedOutUser;
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    //End email and password login functionalities 

    // change after clicking email login button

    const handleChange = (event) => {
        let isFieldValid = true;
        if (event.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                {

                    newUser ?
                        <form className="submitForm">
                            <h4>Create an account</h4>
                            <input type="text" name="name" id="" onBlur={handleChange} placeholder="Name" />
                            <br />
                            <br />
                            <input type="text" name="email" id="" onBlur={handleChange} placeholder="Username or email" required />
                            <br />
                            <br />
                            <input type="password" name="password" id="" onBlur={handleChange} placeholder="Your password" required />
                            <br />


                            <br />
                            <input className="buttonStyle" type="submit" onClick={handleSubmit} value="Create an account" />
                            <br />
                            <br />
                            <label htmlFor="oldUser">Already have an account? <a style={{ color: 'red' }} onClick={() => setNewUser(!newUser)}>Login</a></label>
                        </form>
                        :
                        <form className="submitForm">
                            <h4>Login</h4>
                            <input type="text" name="email" id="" onBlur={handleChange} placeholder="Your email" required />
                            <br />
                            <br />
                            <input type="password" name="password" id="" onBlur={handleChange} placeholder="Your password" required />
                            <br />
                            <br />
                            <input className="buttonStyle" type="submit" onClick={handleSubmit} value="Login" />
                            <br />
                            <br />
                            <label htmlFor="newUser">Are you new? <a style={{ color: 'red' }} onClick={() => setNewUser(!newUser)}>Create account</a></label>
                        </form>
                }
            </div>

            {
                user.success && <p style={{ color: 'green' }}>User {newUser ? "Authentication" : "Logged In"} Success</p>
            }
            <p style={{ color: 'red' }}>{user.error}</p>

            <div className="otherLogin">
                <br />
                <button onClick={handleGoogleSignIn}><img src={googleIcon} alt="" /> Continue with Google</button>
                <br />
            </div>
        </div >
    );
};

export default Login;