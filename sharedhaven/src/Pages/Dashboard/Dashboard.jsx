import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";


const Dashboard = () => {
  return (
    <div>
 <div className="app">
      <div className="app-body flex">
        <div className="app-body-navigation w-64 bg-gray-800 text-white p-4">
          <nav className="navigation flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="ph-browsers"></i>
              <span>Dashboard</span>
            </a>
            <a href="/" className="flex items-center space-x-2">
              <i className="ph-check-square"></i>
              <span>Home</span>
            </a>
          </nav>
          <footer className="footer mt-auto pt-4">
            <div>
            @SharedHaven
            </div>
          </footer>
        </div>
        <div className="app-body-main-content flex-1 p-8">
          <section className="service-section mb-8">
            <h2 className="text-2xl font-bold mb-4">Service</h2>
            <div className="service-section-header flex items-center mb-4">
              <div className="search-field flex items-center border border-gray-300 rounded p-2 mr-4">
                <i className="ph-magnifying-glass mr-2"></i>
                <input type="text" placeholder="Account number" className="outline-none" />
              </div>
              <div className="dropdown-field relative mr-4">
                <select className="border border-gray-300 rounded p-2 bg-white appearance-none">
                  <option>Home</option>
                  <option>Work</option>
                </select>
                <i className="ph-caret-down absolute right-2 top-1/2 transform -translate-y-1/2"></i>
              </div>
              <button className="flat-button bg-blue-600 text-white py-2 px-4 rounded">Search</button>
            </div>
            <div className="mobile-only lg:hidden mb-4">
              <button className="flat-button bg-blue-600 text-white py-2 px-4 rounded">Toggle search</button>
            </div>
            <div className="tiles grid grid-cols-1 lg:grid-cols-3 gap-4">
              <article className="tile bg-white p-4 rounded shadow">
                <div className="tile-header flex items-center mb-4">
                  <i className="ph-lightning-light text-yellow-500 mr-2"></i>
                  <h3>
                    <span className="block text-lg font-bold">Electricity</span>
                    <span className="block text-gray-500">UrkEnergo LTD.</span>
                  </h3>
                </div>
                <a href="#" className="flex items-center text-blue-600 hover:underline">
                  <span>Go to service</span>
                  <span className="icon-button ml-2">
                    <i className="ph-caret-right-bold"></i>
                  </span>
                </a>
              </article>
            </div>
            <div className="service-section-footer mt-4">
              <p className="text-gray-500">Services are paid according to the current state of the currency and tariff.</p>
            </div>
          </section>
          <section className="transfer-section">
            <div className="transfer-section-header flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Latest transfers</h2>
              <div className="filter-options flex items-center">
                <p className="text-gray-500 mr-4">Filter selected: more than $100</p>
                <button className="icon-button text-gray-500 hover:text-black mr-2">
                  <i className="ph-funnel"></i>
                </button>
                <button className="icon-button text-gray-500 hover:text-black">
                  <i className="ph-plus"></i>
                </button>
              </div>
            </div>
            <div className="transfers space-y-4">
              <div className="transfer flex items-center bg-white p-4 rounded shadow">
                <div className="transfer-logo mr-4">
                  <img src="https://assets.codepen.io/285131/apple.svg"height="20px" width="20px"  alt="Apple" />
                </div>
                <dl className="flex-1 flex justify-between items-center">
                  <div>
                    <dt className="text-lg font-bold">Apple ID Payment</dt>
                    <dd className="text-gray-500">today at 16:55</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-bold text-red-600">-$550</dt>
                    <dd className="text-gray-500">USD</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard