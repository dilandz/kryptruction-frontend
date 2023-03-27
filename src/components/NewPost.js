import axios from "axios";
import React, { useState } from "react";


function NewPost({ open, onClose }) {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [contactName, setContactName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const saveInfo = async (e) => {
    e.preventDefault();

    const newPost = {
      jobTitle,
      jobDescription,
      contactName,
      location,
      price,
    };

    console.log(newPost);
    axios
      .post("http://localhost:3001/jobPost/postJobPost", newPost)
      .then(() => {
        alert("New job post is added");
         
      })
      .catch((err) => {
        console.log(err.message);
      });
      window.location.reload();
  };

  if (!open) return null;
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg font-medium mb-4">Create New Job Post</h2>
        <form>
          <label htmlFor="title" className="block mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          />

          <label htmlFor="description" className="block mb-2">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          ></textarea>

          <label htmlFor="personName" className="block mb-2">
            Job Poster Name
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            onChange={(e) => {
              setContactName(e.target.value);
            }}
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          />
          <label htmlFor="location" className="block mb-2">
            Job Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          />
          <label htmlFor="Price" className="block mb-2">
            Rate
          </label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          />

          <button className="py-2 px-4 mt-4 mx-3" onClick={saveInfo}>
            Submit
          </button>

          <button className="py-2 px-4 mt-4 mx-3" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
