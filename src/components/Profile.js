import React, { useContext, useEffect, useState } from "react";

import ProfileNavbar from "./ProfileNavbar";
import axios from "axios";
import { PaymentsContext } from "../context/PaymentsContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { currentAccount } = useContext(PaymentsContext);
  const [userInfo, setUserInfo] = useState({});
  const [userAccount, setUserAccount] = useState(currentAccount);
  const navigate = useNavigate();

  const getPostByID = async () => {
    if (userAccount !== "") {
      try {
        const res = await axios.get(`http://localhost:3001/jobPost/getUserByID/${userAccount}`);
        setUserInfo(res.data);
        console.log("data getting");
      } catch (err) {
        alert(err.message);
      }
    }
  };

  useEffect(() => {
    setUserAccount(currentAccount);
  }, [currentAccount]);

  useEffect(() => {
    getPostByID();
  }, [userAccount]);

  const handleSignUp =() =>{
    navigate("/signup");
  }

  return (
    <div>
      <ProfileNavbar />
      <div className=" w-full h-screen px-10 bg-zinc-50">
        <div className="bg-white shadow m-5">
          <div className="max-w-7xl mx-auto py-6 px-4">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://i.pravatar.cc/300"
                  alt="Profile Pic"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bol">{userInfo.name}</h1>
                <p className="text-md font-medium text-gray-500">
                  {userInfo.userID}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto py-5 sm:px-6 lg:px-8">
            <h3 className="text-lg font-medium m-2">Profile Information</h3>
            <div className="border-t border-gray-300 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="md:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm">{userInfo.name}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Wallet Address
                  </dt>
                  <dd className="mt-1 text-sm">{userInfo.userID}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm">{userInfo.email}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm">{userInfo.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white shadow m-5 mb-64">
          <div className="mx-auto py-5 sm:px-6 lg:px-8">
            <h3 className="text-lg font-medium m-2">
              Edit Profile Information
            </h3>
            <div className="border-t border-gray-300 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1">
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      className="shadow block w-full sm:text-sm border-gray-200 border rounded-md p-3"
                    />
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Wallet Address
                  </dt>
                  <dd className="mt-1 text-sm">{userInfo.userID}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1">
                    <input
                      type="text"
                      name="Email"
                      id="email"
                      className="shadow block w-full sm:text-sm border-gray-200 border rounded-md p-3"
                    />
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1">
                    <input
                      type="text"
                      name="Location"
                      id="location"
                      className="shadow block w-full sm:text-sm border-gray-200 border rounded-md p-3"
                    />
                  </dd>
                </div>
              </dl>

              <button className="px-2 py-1 mt-6 mb-0">Save Edit</button>
              <div>
                <p className="mt-5 mb-3 font-semibold"> If you are not register please sign up then profile information will be shown</p>
              </div>
              <button className="px-2 py-1 mt-6 mb-0" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
