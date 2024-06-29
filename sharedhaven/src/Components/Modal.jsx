import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
      setSelectedTime(null); // Reset time when the date changes
    };
  
    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };
  
    const handleBooking = () => {
      if (selectedDate) {
        setBookingConfirmed(true);
        toggleModal();
      } else {
        alert('Please select a date.');
      }
    };
  return (
    <div>

<button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Book Your Workspace
      </button>

      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full bg-black rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Acceptance of Terms: By using OurPlatform, you agree to these terms and conditions. We may update them from time to time, and it is your responsibility to review them regularly.
              User Conduct: You agree not to use OurPlatform for any unlawful or prohibited activities. This includes, but is not limited to, harassment, defamation, and transmission of harmful content.
                <div className="p-4 w-full max-w-md mx-auto bg-black rounded-lg shadow-md dark:bg-gray-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Book a Slot</h2>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-400 mb-2">Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
        />
      </div>
      
      <button
        onClick={handleBooking}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
      >
        Confirm Booking
      </button>
      {bookingConfirmed && (
        <div className="mt-4 p-4 bg-green-100 border-t-4 border-green-500 rounded-lg text-green-700">
          Booking confirmed for {selectedDate.toLocaleDateString()} for whole day!
        </div>
      )}
    </div>
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We only allow one day of booking in our system.
              </p>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={toggleModal}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Modal