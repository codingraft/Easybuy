import { useState } from "react";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleGoogleLogin = () => {
    // Implement Google login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">
              Gender:
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 p-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Date of Birth:
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-1 p-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <p className="text-lg text-gray-600 mb-4 text-center">If already have an account just login</p>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <BsGoogle className="mr-2" /> Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
