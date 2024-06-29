import React from "react";
import img1 from "../../Images/workspace.webp";
import Card from "../../Components/Card";
const Home = () => {
  return (
    <div className="container-fluid bg-gray-200 h-100">
      Home
      <div className="relative">
        <h1 className=" absolute mx-5 my-5 text-white">
          Join a community of creators, innovators and thought leaders Choose
          your seat today.
        </h1>
        <img src={img1} alt="" className="h-100 w-100" />
      </div>
      <Card/>
    </div>
  );
};

export default Home;
