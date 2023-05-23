import React, { useContext, useState, useEffect } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { PaymentsContext } from "../context/PaymentsContext";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const { currentAccount } = useContext(PaymentsContext);
  const [name, setName] = useState("");
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setUserID(currentAccount);
  }, [currentAccount]);

  const saveInfo = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      userID,
      email,
      location,
      type,
    };
    console.log(newUser);
    if (name && userID && email && location && type) {
      axios
        .post("http://localhost:3001/jobPost/postUser", newUser)
        .then(() => {
          alert("New User is added");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      alert("Please fill or select all the forms");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between px-10 bg-zinc-50">
      <div className="grid md:grid-cols-2 max-w-{1240px} m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2 ">
          <img src={logo} alt="Logo" className="py-2 px-2 w-80 animate-pulse" />
          <p className="text-1xl font-bold py-2 px-2 max-w-lg">
            One-stop shop for all employment needs for the construction business
            with payment made available via blockchain
          </p>
        </div>
        <div className="border bg-white py-8 rounded-xl shadow-xl item-center text-center">
          <h3 className="font-semibold mb-3">Sign Up To Kryptruction</h3>

          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 m-5">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="shadow block w-full sm:text-sm border-gray-200 border rounded-md p-3"
                />
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Wallet Address
              </dt>
              <dd className="mt-1 text-sm">
                {currentAccount.slice(0, 10)}...
                {currentAccount.slice(currentAccount.length - 10)}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1">
                <input
                  type="text"
                  name="Email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="shadow block w-full sm:text-sm border-gray-200 border rounded-md p-3"
                />
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1">
                <input
                  type="text"
                  name="Location"
                  id="location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="shadow block w-full sm:text-sm border-gray-200 border rounded-md p-3"
                />
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Profile Type
              </dt>
              <dd className="mt-1">
                <select
                  id="entity-type"
                  name="entity-type"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select type of business</option>
                  <option value="Job Poster">Job Poster</option>
                  <option value="Business">Business</option>
                </select>
              </dd>
            </div>
          </dl>

          <button className="mb-3py-2 px-4 font-bold" onClick={saveInfo}>
            Sign Up
          </button>

          <h3 className="text-left ml-6  mt-4 font-bold text-sm">Note:</h3>
          <p className="font-semibold text-gray-900 text-justify px-4 py-4 text-sm">
            If you don't have the MetaMask extension installed, please install
            the MetaMask extension to your browser to contiune logging in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
