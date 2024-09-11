
function QandAComponent({ data }) {
  return (
    <div className="w-[45rem] border border-blue-400 bg-white rounded shadow-md p-4">
    {/* Question Section */}
    <div className="question-section mb-4">
      <div className="flex items-center">
        <div className="profile-photo w-10 h-10 bg-gray-300 rounded-full mr-4" /> {/* Circle div */}
        <div>
          <div className="text-lg font-semibold">{data.Username}</div>
          <div className="text-sm text-gray-500">{new Date(data.date).toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
        </div>
      </div>
      <div className="mt-2 text-md text-gray-700">
        {data.Quetion}
      </div>
  
      
      <form onSubmit={(e)=>{
e.preventDefault();
      }}>
        <input type="text" name="ans" id="ans" autoComplete="off" className="w-full h-8 outline-none border border-gray-200 mb-2" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">Add Answer</button>
      </form>
    </div>
    <div className="answer-section ml-6 text-sm mb-3"> {/* Shifted right and smaller */}
      <div className="flex items-center">
        <div className="profile-photo w-8 h-8 bg-gray-300 rounded-full mr-4" /> {/* Smaller circle */}
        <div>
          <div className="text-md font-semibold">Jane Smith</div>
          <div className="text-xs text-gray-500">Sep 11, 2024</div>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        JSX allows you to write HTML-like syntax in JavaScript, which will be transpiled to JavaScript code, while HTML is a markup language.
      </div>
  
      {/* Buttons for Edit and Delete */}
      <div className="mt-2 flex space-x-4">
        <button className="text-blue-500 text-xs hover:underline">Edit</button>
        <button className="text-red-500 text-xs hover:underline">Delete</button>
      </div>
    </div>
    <div className="answer-section ml-6 text-sm"> {/* Shifted right and smaller */}
      <div className="flex items-center">
        <div className="profile-photo w-8 h-8 bg-gray-300 rounded-full mr-4" /> {/* Smaller circle */}
        <div>
          <div className="text-md font-semibold">Jane Smith</div>
          <div className="text-xs text-gray-500">Sep 11, 2024</div>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        JSX allows you to write HTML-like syntax in JavaScript, which will be transpiled to JavaScript code, while HTML is a markup language.
      </div>
  
      {/* Buttons for Edit and Delete */}
      <div className="mt-2 flex space-x-4">
        <button className="text-blue-500 text-xs hover:underline">Edit</button>
        <button className="text-red-500 text-xs hover:underline">Delete</button>
      </div>
    </div>
  </div>
  
  
  )
}

export default QandAComponent