import { Link } from 'react-router-dom';

function Page3() {
  return (
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, User!</h1>
        <p className="text-lg text-gray-600 mb-6">
          You have successfully logged in. Feel free to explore your dashboard and check out the features available for you.
        </p>

        <div className="space-y-4">
        <Link to="/page4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300">
            Profile
          </button>
      </Link>

          <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all duration-300">
            Settings
          </button>
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-all duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>

  );
}

export default Page3;