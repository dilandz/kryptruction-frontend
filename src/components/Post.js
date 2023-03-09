import React, { useState } from "react";
import ProfileNavbar from "./ProfileNavbar";
import NewPost from "./NewPost";


function Post() {
      const [isOpenCardDetails, setIsOpenCardDetails] = useState(false);
      const [isOpenNewPost, setIsOpenNewPost] = useState(false);
      

      const togglePopup = () => {
        setIsOpenCardDetails(!isOpenCardDetails);
      };
    
      return (
        <div className=" bg-zinc-50 h-screen w-full">
          <ProfileNavbar />
          <div className="flex justify-between items-start py-4 px-8 ">
            <h1 className="text-2xl font-bold text-red-800 uppercase items-start">
              Current posts
            </h1>
            <button className="px-4 py-2 items-end" onClick={() => setIsOpenNewPost(true)}>
              New
            </button>
          </div>
         
          <NewPost open={isOpenNewPost} onClose={() => setIsOpenNewPost(false)}/>
          
    
          <div className="grid grid-cols-3 gap-4 px-5 py-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-zinc-50">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Job title
                  </div>
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    Job name
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Job description fgdfgjod gri egj ero reigj
                  </p>
                  <button className="px-2 mt-2" onClick={togglePopup}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
            {isOpenCardDetails && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-md p-8 max-w-md mx-auto">
                  <h2 className="text-2xl font-bold">title</h2>
                  <p className="text-gray-600">
                    description Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nullam eget tortor quam. Nulla facilisi. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Quisque nec tortor in nulla lacinia tincidunt. Fusce ac
                    felis eget nulla viverra suscipit ut eu ex
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="py-2 px-4 mt-4 mx-3" onClick={togglePopup}>
                      Close
                    </button>
                    <button className="py-2 px-4 mt-4 mx-3" onClick={togglePopup}>
                      Delete
                    </button>
                  
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
}

export default Post;
