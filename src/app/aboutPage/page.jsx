import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About MentorTalk</h1>
          <p className="text-xl text-gray-600">Bridging the gap between knowledge seekers and knowledge sharers</p>
        </header>

        <section className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At MentorTalk, we believe that everyone deserves access to quality guidance and mentorship. Our mission is to create a global community where students can connect with experienced mentors, fostering growth, learning, and success across various fields of study.
            </p>
            <p className="text-gray-700">
              We strive to make education more accessible, personalized, and effective by leveraging technology to bring together passionate learners and dedicated mentors from around the world.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>One-on-one mentorship sessions with experts in various fields</li>
              <li>Flexible scheduling to accommodate different time zones and availability</li>
              <li>Secure messaging system for ongoing communication</li>
              <li>Resource sharing platform for study materials and guides</li>
              <li>Question and answer forum for quick problem-solving</li>
              <li>Progress tracking and goal-setting tools</li>
              <li>Diverse range of subjects and specializations covered</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Students</h2>
              <ul className="text-gray-700 space-y-2">
                <li>✅ Access to experienced mentors in your field of study</li>
                <li>✅ Personalized guidance and support</li>
                <li>✅ Flexible learning options to fit your schedule</li>
                <li>✅ Improve your academic performance and career prospects</li>
                <li>✅ Develop essential skills beyond the classroom</li>
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Mentors</h2>
              <ul className="text-gray-700 space-y-2">
                <li>✅ Share your knowledge and expertise with eager learners</li>
                <li>✅ Flexible mentoring hours to suit your availability</li>
                <li>✅ Build your professional network and reputation</li>
                <li>✅ Earn additional income through mentoring sessions</li>
                <li>✅ Contribute to the growth and success of future professionals</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-700 mb-4">
              Whether you're a student looking for guidance or an expert wanting to share your knowledge, MentorTalk is the perfect platform for you. Join our growing community of learners and mentors, and be part of a movement that's shaping the future of education.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sign Up as Student
              </button>
              <button className="bg-green-600 text-white py-2 px-6 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Become a Mentor
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;