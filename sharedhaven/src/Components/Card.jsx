import React from 'react'
import img1 from "../Images/workspace.webp";
const Card = () => {
  return (
    <div className='container mt-3 '>
        <div className="row border-solid border-4 border-gray-500">
  <div className='col col-lg-6' >
    <img src={img1} alt=""  className='h-100 w-100'/>
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 justify-between leading-normal
   col col-lg-6
   ">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" alt="Avatar of Jonathan Reinink"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card