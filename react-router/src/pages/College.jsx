import { Link, Outlet } from "react-router";

export default function College() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">College Details</h1>

      <div className="mb-4 font-extrabold">
        <h1>
          <Link to="/">⬅️Back to Home</Link>
        </h1>
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link
            to=""
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Students
          </Link>
        </li>
        <li>
          <Link
            to="department"
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Department
          </Link>
        </li>
        <li>
          <Link
            to="detail"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Details
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
