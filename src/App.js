import "./App.css";

import Login from "./components/Login";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Post from "./components/Post";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Progress from "./components/Progress";
import Recurit from "./components/Recurit";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/profile/post" element={<Post />}></Route>
          <Route exact path="/profile/progress" element={<Progress />}></Route>
          <Route exact path="/profile/recurit" element={<Recurit />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
