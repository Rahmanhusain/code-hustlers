import React from 'react';

const CoverPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">MentorTalk</h1>
        <p className="text-xl text-blue-600">The Mentor You Need, Right When You Need It</p>
      </header>

      <main className="max-w-4xl w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Find Your Perfect Mentor</h2>
          <p className="text-lg text-gray-600 mb-6">
            Get guidance on academics, career, personal development, and more. Our platform connects you with experienced mentors who can help you navigate life's challenges.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p className="text-center text-gray-600">Connect with experienced professionals across various fields.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">All Topics Covered</h3>
            <p className="text-center text-gray-600">From academics to life skills, get help with any issue.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
            <p className="text-center text-gray-600">Chat, video call, or meet in person - whatever works for you.</p>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2024 MentorTalk. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoverPage;