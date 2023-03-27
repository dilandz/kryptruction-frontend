import React, { useEffect,useState } from 'react'
import ProfileNavbar from './ProfileNavbar';
import axios from "axios";

function Recurit() {
      const [isOpenCardDetails, setIsOpenCardDetails] = useState(false);
      const [recruitPost,setRecruitPost] = useState([]);

      useEffect(() => {
        const getRecruitPost = async () => {
          await axios
            .get("http://localhost:3001/jobPost/getRecruit")
            .then((res) => {
              setRecruitPost(res.data);
              console.log("data getting");
            })
            .catch((err) => {
              alert(err.message);
            });
        };
        getRecruitPost();
      },[]);
      

      const togglePopup = () => {
        setIsOpenCardDetails(!isOpenCardDetails);
      };
    
      return (
        <div className=" bg-zinc-50 h-screen w-full">
          <ProfileNavbar />
          <div className="flex justify-between items-start py-4 px-8 ">
            <h1 className="text-2xl font-bold text-red-800 uppercase items-start">
              Current Recurits
            </h1>
          </div>
    
          <div className="grid grid-cols-3 gap-4 px-5 py-5">
            {recruitPost.map((data) =>(
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-zinc-50">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {data.companyName}
                  </div>
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    {data.jobTitle}
                  </h2>
                  <p className="mt-2 text-gray-500">
                    {data.jobDescription}
                  </p>
                  <button className="px-2 mt-2" onClick={togglePopup}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
           ))}
          </div>
        </div>
      );
    
}

export default Recurit;