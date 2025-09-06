export default function PageNotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6 text-center px-4">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
