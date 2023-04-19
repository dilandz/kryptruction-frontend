import React, { useEffect, useState } from "react";
import ProfileNavbar from "./ProfileNavbar";
import axios from "axios";
import { ethers } from "ethers";
import {
  contractAgreementABI,
  contractAgreementAddress,
} from "../abi_contract/constants";
import { Link } from "react-router-dom";

function Recruit() {
  const [recruitPost, setRecruitPost] = useState([]);
  const { ethereum } = window;

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
  }, []);

  // Accepting the agreement from company side
  const acceptAgreement = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const agreementContract = new ethers.Contract(
      contractAgreementAddress,
      contractAgreementABI,
      signer
    );

    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    const agreementHash = await agreementContract.approveAgreement();

    console.log(`Loading - ${agreementHash.hash}`);
    await agreementHash.wait();
    console.log(`Success - ${agreementHash.hash}`);
  };

  //When accpeted posting it's data to the recruit table
  const agreementAccept = async (data) => {
    const id = data._id;
    await axios
      .put(`http://localhost:3001/jobPost/updateRecruit/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log("Agreement Accepted");
      })
      .catch((err) => {
        alert(err.message);
      });

    acceptAgreement();
  };

  return (
    <div className=" bg-zinc-50 h-screen w-full">
      <ProfileNavbar />
      <div className="flex justify-between items-start py-4 px-8 ">
        <h1 className="text-2xl font-bold text-red-800 uppercase items-start">
          Current Recruits
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 px-5 py-5">
        {recruitPost.map((data) => (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-zinc-50">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {data.companyName}
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {data.jobTitle}
                </h2>
                <p className="mt-2 text-gray-500 mb-4">{data.jobDescription}</p>
                <Link
                  className="px-2 p-1 m-3 items-center bg-red-800 hover:bg-transparent hover:text-red-800 text-white rounded-full"
                  to={`/accepteddetails/${data._id}`}
                >
                  View Details
                </Link>
                {!data.approval ? (
                  <button
                    className="px-2 mt-2 m-3 p-1"
                    onClick={() => agreementAccept(data)}
                  >
                    Accept Agreement
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recruit;
