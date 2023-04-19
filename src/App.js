import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Post from "./components/Post";
import SignUP from "./components/SignUp";
import Progress from "./components/Progress";
import Recruit from "./components/Recruit";
import ViewDetails from "./components/ViewDetails";
import Request from "./components/Request";
import ViewPostInfo from "./components/ViewPostInfo";
import ApprovedPostInfo from "./components/ApprovedPostInfo";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUP />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/viewdetails/:id" element={<ViewDetails />}></Route>
          <Route exact path="/details/:id" element={<ViewPostInfo />}></Route>
          <Route exact path="/accepteddetails/:id" element={<ApprovedPostInfo />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/profile/post" element={<Post />}></Route>
          <Route exact path="/profile/progress" element={<Progress />}></Route>
          <Route exact path="/profile/recruit" element={<Recruit />}></Route>
          <Route exact path="/profile/request" element={<Request />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
