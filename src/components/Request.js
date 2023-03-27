import React, { useEffect, useState } from "react";
import ProfileNavbar from "./ProfileNavbar";
import axios from "axios";

function Request() {
  const [requestInfo, setRequestInfo] = useState([]);

  const getRequest = async () => {
    await axios
      .get("http://localhost:3001/jobPost/getRequests")
      .then((res) => {
        setRequestInfo(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getRequest();
  }, []);

  const deleteRequest = async (id) => {  
   
    await axios
      .delete(`http://localhost:3001/jobPost/deleteRequest/${id}`)
      .then(() => {
        console.log("Request Deleted");
        alert("Requested Job Rejected");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  

  return (
    <div className=" bg-zinc-50 h-screen w-full">
      <ProfileNavbar />
      <div className="flex justify-between items-start py-4 px-8 ">
        <h1 className="text-2xl font-bold text-red-800 uppercase items-start">
          Requested Work
        </h1>
      </div>

      <div className="grid grid-row gap-4 px-5 py-5">
        {requestInfo.map((data) => (
          <div className=" w-full bg-white rounded-xl shadow-md overflow-hidden hover:bg-zinc-50">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {data.companyName}
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {data.jobTitle}
                </h2>
                <p className="mt-2 text-gray-500">{data.jobDescription}</p>
                <div className="flex justify-center items-center">
                  {/* <button className="py-1 px-4 mt-3 mx-3 mb-2">Close</button> */}
                  <button
                    className="py-1 px-4 mt-3 mx-3 mb-2"
                    onClick={() => deleteRequest(data._id)}
                  >
                    Reject
                  </button>
                  <button className="py-1 px-4 mt-3 mx-3 mb-2">Accept</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Request;
