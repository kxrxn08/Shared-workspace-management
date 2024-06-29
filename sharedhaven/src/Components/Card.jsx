import React from 'react'
import img1 from "../Images/workspace.webp";
import img2 from "../Images/14.webp"
import img3 from "../Images/5-1.webp"
import img4 from "../Images/9.webp"
import img5 from "../Images/6.webp"

const Card = ({id,title,content,image2}) => {
  return (
    <div className='container mt-5 '>
        <div className="row border-solid border-4 border-gray-500 rounded-lg" >
  <div className='col col-lg-6 h-50' >
    <img src={image2} alt="34444"  className='h-75 w-100 m-auto'/>
  </div>
  <div className="border-b  lg:border-t bg-white rounded-b  lg:rounded-r p-4 justify-between leading-normal col col-lg-6 ">
    <div className="mb-8 text-3xl">
      <div className="text-gray-900 font-bold mb-2">{title}</div>
      <p className="text-gray-700 text-xl">{content}</p>
    </div>
    {/* <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" alt="Avatar of Jonathan Reinink"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div> */}
  </div>
</div>

    </div>
  )
}

export default Card