import React from "react";
import { useState } from "react";

import Cookies from "js-cookie";

import axios from "axios";

const SignUp = ({ setShowModal, setIsLoggedIn }) => {
  //    {
  //   "email": "johndoe@lereacteur.io",
  //   "username": "JohnDoe",
  //   "password": "azerty",
  //   "newsletter": true
  // }

  //to prevent scrolling on modal
  //does not prevent scroll on mobile
  document.body.style.overflow = "hidden";

  const [signUpObject, setSignUpObject] = useState({});

  // try to sign up
  const trySignUp = async () => {
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      signUpObject
    );
    setIsLoggedIn(Cookies.set("authenticated", response.data.token));
    setShowModal("none");
  };

  const buildRequestObject = (key, keyValue) => {
    const objCopy = { ...signUpObject };
    objCopy[key] = keyValue;
    setSignUpObject(objCopy);
  };

  return (
    <div className="signup-modal">
      <div
        className="signup-bg"
        onClick={() => {
          setShowModal("none");
        }}
      ></div>
      <div className="signup-popup">
        <h3>S'inscrire</h3>
        <div className="signup-holder">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              buildRequestObject("username", event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => {
              buildRequestObject("email", event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              buildRequestObject("password", event.target.value);
            }}
          />
          <div className="signup-popup-newsletter-holder">
            <p>
              <input
                className="signup-popup-newsletter-checkbox"
                type="checkbox"
                value="newsletter"
                onChange={(event) => {
                  buildRequestObject("newsletter", event.target.checked);
                }}
              />
              <span>S'inscrire à notre newsletter</span>
            </p>
            <p className="signup-popup-disclaimer">
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button
            className="signup-btn"
            onClick={() => {
              trySignUp();
            }}
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;