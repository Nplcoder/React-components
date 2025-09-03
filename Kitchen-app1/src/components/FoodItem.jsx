export default function FoodItem({food}){
    return(
        <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-2 m-2">
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h1 className="mt-3 text-lg font-semibold text-gray-800">{food.title}</h1>
        <button className="mt-4 w-full px-4 py-2 bg-yellow-400 text-gray-800 font-medium rounded-lg hover:bg-yellow-500 transition">
          Read more
        </button>
      </div>
      
)}