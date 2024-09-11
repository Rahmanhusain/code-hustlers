'use client';
import React, { useState } from 'react';

const StudentQuestionUpload = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [attachments, setAttachments] = useState([]);

  const categories = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 
    'Computer Science', 'Literature', 'History', 'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the question data to your backend
    console.log('Question submitted:', { title, category, question, attachments });
    alert('Question submitted successfully!');
    // Reset form
    setTitle('');
    setCategory('');
    setQuestion('');
    setAttachments([]);
  };

  const handleFileChange = (e) => {
    setAttachments([...e.target.files]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Upload Your Question</h1>
          <p className="mt-1 text-sm text-gray-600">Provide details about your question to get the best help from mentors.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Question Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter a concise title for your question"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                Your Question
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows="6"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Describe your question in detail. Include any relevant information that might help mentors understand and answer your question."
              ></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">
                Attachments (optional)
              </label>
              <input
                type="file"
                id="attachments"
                onChange={handleFileChange}
                multiple
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                You can upload images, documents, or code files related to your question.
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentQuestionUpload;