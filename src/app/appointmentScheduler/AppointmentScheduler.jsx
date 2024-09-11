'use client'
import React, { useState } from 'react';

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  // Mock data for available dates and times
  const availableDates = ['2024-09-15', '2024-09-16', '2024-09-17', '2024-09-18', '2024-09-19'];
  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the appointment data to your backend
    console.log('Appointment booked:', { selectedDate, selectedTime, topic, description });
    alert('Appointment booked successfully!');
    // Reset form
    setSelectedDate(null);
    setSelectedTime(null);
    setTopic('');
    setDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Schedule an Personlised Appointment with Your Mentor</h1>
          <p className="mt-1 text-sm text-gray-600">Choose a date, time, and provide details for your session.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Select a Date</h2>
              <div className="grid grid-cols-3 gap-2">
                {availableDates.map((date) => (
                  <button
                    key={date}
                    onClick={() => handleDateClick(date)}
                    className={`py-2 px-4 rounded-md text-sm font-medium ${
                      selectedDate === date
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </button>
                ))}
              </div>
              {selectedDate && (
                <div className="mt-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Select a Time</h2>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeClick(time)}
                        className={`py-2 px-4 rounded-md text-sm font-medium ${
                          selectedTime === time
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Appointment Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                    Topic
                  </label>
                  <input
                    type="text"
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduler;