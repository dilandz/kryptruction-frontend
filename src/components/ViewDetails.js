import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ViewDetails() {
  const [postInfo, setPostInfo] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  //Get job post details based on selected id to the edit
  useEffect(() => {
    const getPostByID = async () => {
      await axios
        .get(`http://localhost:3001/jobPost/getJobPostByID/${id}`)
        .then((res) => {
          setPostInfo(res.data);
          console.log("data getting");
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getPostByID();
  }, [id]);

  const toggleClose = () => {
    navigate(-1);
  };

  const handleRequest = async (date) => {
    await axios
      .post("http://localhost:3001/jobPost/postRequest", postInfo)
      .then(() => {
        console.log("Save to request table");
        alert("Request Created");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className=" bg-zinc-50 h-full w-full">
      <div className="bg-white shadow-lg ml-5 mr-5 mt-10">
        <div className="mx-auto py-5 sm:px-6 lg:px-8">
          <h3 className="text-lg font-medium m-2">Job Post Details</h3>

          <div className="border-t border-gray-300 px-4 py-5 sm:px-6">
            <h3 className="text-sm text-gray-500">Job Title</h3>
            <h3 className="mt-1 text-mb font-semibold mb-2">
              {" "}
              {postInfo.jobTitle}
            </h3>
            <h3 className="text-sm text-gray-500">Job Description</h3>
            <p className="mt-1  text-mb font-semibold mb-4">
              {" "}
              {postInfo.jobDescription}
            </p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm text-gray-500">Posted By</dt>
                <dd className="mt-1  text-mb font-semibold">
                  {postInfo.contactName}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm text-gray-500">Rate</dt>
                <dd className="mt-1 text-mb font-semibold">{postInfo.price}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm text-gray-500">Location</dt>
                <dd className="mt-1 text-mb font-semibold">
                  {postInfo.location}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm text-gray-500">Was Created on</dt>
                <dd className="mt-1 text-mb font-semibold">{postInfo.date}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="py-1 px-4 mt-4 mx-3 mb-3" onClick={toggleClose}>
            Close
          </button>

          <button className="py-1 px-4 mt-4 mx-3 mb-3" onClick={handleRequest}>
            Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
