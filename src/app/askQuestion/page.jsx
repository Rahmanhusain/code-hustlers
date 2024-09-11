'use client'
import React, { useState } from 'react';

const QuestionAnswerPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, student: 'Alice', question: "How do I start learning React?', answer: 'Start with the official React documentation and try building small projects." },
    { id: 2, student: 'Bob', question: "What's the difference between let and const in JavaScript?', answer: 'let allows reassignment, while const is for variables that won't be reassigned."},
  ]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      const newQuestionObj = {
        id: questions.length + 1,
        student: 'Current User',
        question: newQuestion.trim(),
        answer: '',
      };
      setQuestions([...questions, newQuestionObj]);
      setNewQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Student Q&A Forum</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Type your question here..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Submit Question
            </button>
          </form>
        </div>

        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Asked by: {q.student}</span>
                <span className="text-sm text-gray-500">Question #{q.id}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{q.question}</h3>
              {q.answer ? (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-600 mb-2">Answer:</p>
                  <p className="text-gray-700">{q.answer}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">This question hasn't been answered yet.</p>
              )}
              {!q.answer && (
                <div className="mt-4">
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Provide an answer (Mentor only)
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerPage;