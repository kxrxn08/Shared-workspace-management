import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const BookingSlot = () => {
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
    } else {
      alert('Please select both a date and a time.');
    }
  };
  return (
    <div>
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
    </div>
  )
}

export default BookingSlot