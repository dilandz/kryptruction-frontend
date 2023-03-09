import React from "react";

import ProfileNavbar from "./ProfileNavbar";

function Profile() {
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
                <h1 className="text-2xl font-bol">Name</h1>
                <p className="text-md font-medium text-gray-500">
                  Wallet Address
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
                  <dd className="mt-1 text-sm">Kryptruction</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Wallet Address
                  </dt>
                  <dd className="mt-1 text-sm">0x2v1f351d213x5454</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm">kryptruction@mail.com</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm">Colombo, Sri Lanka</dd>
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
                  <dd className="mt-1 text-sm">0x2v1f351d213x5454</dd>
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
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Profile;
