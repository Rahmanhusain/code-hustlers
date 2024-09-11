import React from 'react';

const MentorsList = () => {
  // Mock data for mentors
  const mentors = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      expertise: "Computer Science",
      rating: 4.8,
      sessions: 120,
      availability: "Mon, Wed, Fri",
      imageUrl: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
    },
    {
      id: 2,
      name: "Prof. John Doe",
      expertise: "Mathematics",
      rating: 4.9,
      sessions: 200,
      availability: "Tue, Thu, Sat",
      imageUrl: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
    },
    {
      id: 3,
      name: "Sarah Johnson, MSc",
      expertise: "Data Science",
      rating: 4.7,
      sessions: 85,
      availability: "Mon, Tue, Thu",
      imageUrl: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
    },
    {
      id: 4,
      name: "Michael Chen, PhD",
      expertise: "Artificial Intelligence",
      rating: 4.9,
      sessions: 150,
      availability: "Wed, Fri, Sat",
      imageUrl: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Available Mentors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    className="w-16 h-16 rounded-full mr-4" 
                    src={mentor.imageUrl} 
                    alt={`${mentor.name}'s profile`}
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{mentor.name}</h2>
                    <p className="text-sm text-gray-600">{mentor.expertise}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">{mentor.rating} / 5.0</span>
                  </div>
                  <p className="text-sm text-gray-600">{mentor.sessions} sessions completed</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Availability</h3>
                  <p className="text-sm text-gray-600">{mentor.availability}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    View Profile
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsList;