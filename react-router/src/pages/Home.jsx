export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center mb-6">
          This is a dummy home page. You can add your main content here, such as
          an introduction about your site, services, or features. Use this space
          to grab visitors’ attention and guide them through your app.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    );
  }
  