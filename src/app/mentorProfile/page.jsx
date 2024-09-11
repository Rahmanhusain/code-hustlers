import React from 'react';

const MentorProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 h-32 sm:h-48"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
          <div className="relative -mt-16 sm:-mt-24">
            <img className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-white mx-auto" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid" alt="John's profile picture" />
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Dr. Jane Smith</h1>
            <p className="text-xl text-gray-600">Computer Science</p>
          </div>
          <div className="mt-6">
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                Message
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                Schedule Session
              </button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
              <p className="text-gray-600">
                With over 10 years of experience in software development, I'm passionate about guiding the next generation of engineers. My expertise includes web development, mobile apps, and cloud technologies.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Expertise</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>JavaScript & TypeScript</li>
                <li>React & React Native</li>
                <li>Node.js & Express</li>
                <li>AWS & Azure</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Education & Certifications</h2>
            <ul className="space-y-2 text-gray-600">
              <li>BSc in Computer Science, Tech University</li>
              <li>AWS Certified Solutions Architect</li>
              <li>Google Cloud Professional Developer</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Mentoring Approach</h2>
            <p className="text-gray-600">
              I believe in a hands-on, project-based approach to learning. My sessions focus on real-world problem-solving and practical application of concepts. I'm here to guide you through your coding journey, help you build a strong portfolio, and prepare you for a successful career in tech.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Availability</h2>
            <p className="text-gray-600">
              Available for mentoring sessions on weekday evenings and weekend afternoons. Flexible scheduling available for long-term mentees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfilePage;