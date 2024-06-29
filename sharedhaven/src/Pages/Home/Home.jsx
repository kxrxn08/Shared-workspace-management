import React from "react";
import img1 from "../../Images/workspace.webp";
import Card from "../../Components/Card";
import { Data } from '../../Data';
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
      {
        Data?.map((e)=>{
          {console.log(e.image)}
          return   <Card key={e.id} title={e.title} content={e.content}  image2={e.image} />
        })
      }
    </div>
  );
};

export default Home;
