import React from 'react'

const Navbar = () => {
  return (
    <div className="app-header-navigation flex-1 ml-8">
          <div className="tabs flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Overview</a>
            <a href="#" className="text-white border-b-2 border-white">Payments</a>
            <a href="#" className="text-gray-300 hover:text-white">Cards</a>
            <a href="#" className="text-gray-300 hover:text-white">Account</a>
            <a href="#" className="text-gray-300 hover:text-white">System</a>
            <a href="#" className="text-gray-300 hover:text-white">Business</a>
          </div>
        </div>
  )
}

export default Navbar