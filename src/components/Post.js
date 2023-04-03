import React, { useState, useEffect } from "react";
import ProfileNavbar from "./ProfileNavbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Post() {
  const [postInfo, setPostInfo] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      await axios
        .get("http://localhost:3001/jobPost/getJobPosts")
        .then((res) => {
          setPostInfo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    getPost();
  }, []);

  const deletePost = async (id) => {
    await axios
      .delete(`http://localhost:3001/jobPost/deletePost/${id}`)
      .then(() => {
        console.log("Request Deleted");
      
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
          Post
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 px-5 py-5">
        {postInfo.map((data) => (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-zinc-50">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {data.companyName}
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {data.jobTitle}
                </h2>
                <p className="mt-2 text-gray-500">{data.jobDescription}</p>
                <Link
                  className="px-2 items-center bg-red-800 hover:bg-transparent hover:text-red-800 text-white rounded-full"
                  to={`/details/${data._id}`}
                >
                  View Details
                </Link>
                <button
                    className="px-2 mt-2 m-3"
                    onClick={() => deletePost(data._id)}
                  >
                    Delete
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
