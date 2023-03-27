import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [isOpenNewPost, setIsOpenNewPost] = useState(false);
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

  return (
    <div className=" bg-zinc-50 h-full w-full">
      <Navbar />
      <div className="flex justify-between items-start py-4 px-8 ">
        <h1 className="text-2xl font-bold text-red-800 uppercase items-start">
          Marketplace
        </h1>
        <button
          className="px-4 py-2 items-end"
          onClick={() => setIsOpenNewPost(true)}
        >
          New
        </button>
      </div>

      <NewPost open={isOpenNewPost} onClose={() => setIsOpenNewPost(false)} />

      <div className="grid grid-cols-4 gap-5 px-2 py-2">
        {postInfo.map((post) => (
          <div
            key={post._id}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-zinc-50"
          >
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {post.contactName}
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {post.jobTitle}
                </h2>
                <p className="mt-2 text-gray-500">{post.jobDescription}</p>
                <h3>${post.price}</h3>
                <Link
                  className="px-2 items-center bg-red-800 hover:bg-transparent hover:text-red-800 text-white rounded-full"
                  to={`/viewdetails/${post._id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
