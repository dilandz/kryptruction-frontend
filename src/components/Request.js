import React, { useEffect, useState } from "react";
import ProfileNavbar from "./ProfileNavbar";
import axios from "axios";
import { ethers } from "ethers";
import {
  contractAgreementABI,
  contractAgreementAddress,
} from "../abi_contract/constants";

function Request() {
  const { ethereum } = window;
  const [requestInfo, setRequestInfo] = useState([]);

  const createAgreement = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const agreementContract = new ethers.Contract(
      contractAgreementAddress,
      contractAgreementABI,
      signer
    );

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const agreementText =
      "Creating this agreement makes you agree to work together with other party and provide all the necessary serivces.";

    const agreementHash = await agreementContract.createAgreement(
      agreementText,
      accounts[0]
    );

    console.log(`Loading - ${agreementHash.hash}`);
    await agreementHash.wait();
    console.log(`Success - ${agreementHash.hash}`);
  };

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

  //TODO: update does not work
  const handleAccept = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:3001/jobPost/postRecruit", data)
      .then(() => {
        createAgreement();
        console.log("Save to recruit table");
        alert("Job Agreement is accepted");
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
                  <button
                    className="py-1 px-4 mt-3 mx-3 mb-2"
                    onClick={() => handleAccept(data)}
                  >
                    Accept
                  </button>
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
