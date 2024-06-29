import React from "react";
import img1 from "../../Images/workspace.webp";
import Card from "../../Components/Card";
import { Data } from '../../Data';
const Home = () => {
  return (
    <div className="container-fluid bg-gray-200 h-100">
      <div className="relative">
        <div className=" absolute left-20 top-20 w-50 text-white fw-bold text-3xl border-l-4 pl-2 border-l-orange-500 text-center">
          Join a community of creators, innovators and thought leaders Choose
          your seat today.
        </div>
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
