import { Link } from 'react-router-dom';

function Page1() {
  return (
    
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 md:p-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are excited to have you here! This website is designed to offer you the best experience.
          Explore our services and get to know more about what we do. We're committed to delivering high-quality solutions tailored to your needs.
        </p>
        <Link to="/page2">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Login Page
        </button>
      </Link>

      </div>
    </div>

  );
}

export default Page1;