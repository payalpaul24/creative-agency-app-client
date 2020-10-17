import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../config/firebase.config";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import google from "../../images/icons/google.png";
import logo from "../../images/logos/logo.png";

const Login = () => {
    
    const { user, data } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	const [alert, setAlert] = useState({
		success: false,
		error: "",
	});

	/* Route redirects after login */
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/order" } };

	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	/* GOOGLE Sign in */
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const newUser = {
					isLoggedIn: true,
					name: displayName,
					email: email,
				};
				setLoggedInUser(newUser);
				history.replace(from);

				const newAlert = { ...alert };
				newAlert.success = true;
				newAlert.error = "";
				setAlert(newAlert);
			})
			.catch((error) => {
				const newAlert = { ...alert };
				newAlert.error = error.message;
				setAlert(newAlert);
			});
	};

    return (
        <div className="container mt-5">
            <Link className="nav-link" to="/">
            <div className="d-flex justify-content-center">
                <img className="text-center" style={{ width: '150px', height: '47px' }} src={logo} alt="" />
            </div>
            </Link>
            <div style={{ padding: '40px' }} className="container m-auto col-md-7 card-deck">
                <div className="card p-3 border-1 text-center mt-5">
                    {alert.error.length > 0 && <div className="alert alert-danger text-center">{alert.error}</div>}
                    <div>
                        <h4 className="card-title">Login With</h4>
                        <button style={{ borderRadius: '40px' }} className="card-text btn btn-outline-secondary mt-5 w-75" onClick={handleGoogleSignIn}>
                            <img src={google} alt="" />Continue with Google
				        </button>
                    </div>
                    <h5 className="mt-5 card-footer">
                        <span>Don’t have an account?</span>
                        <Link to="/login">Create an account</Link>
                    </h5>
                </div>

            </div>
        </div>
    );
};

export default Login;
