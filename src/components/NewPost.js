import React from 'react'

function NewPost({open, onClose}) {
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
            id="title"
            name="title"
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          />

          <label htmlFor="description" className="block mb-2">
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          ></textarea>

          <label htmlFor="location" className="block mb-2">
            Job Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full border-gray-300 rounded-md mb-4 border-2"
          />

          <button  className="py-2 px-4 mt-4 mx-3">
            Submit
          </button>
         
          <button  className="py-2 px-4 mt-4 mx-3" onClick={onClose} >
            Close
          </button>
         
        </form>
      </div>
    </div>
  ) 
}

export default NewPost