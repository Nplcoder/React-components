import { useEffect, useState } from "react"
const URL = 'https://api.spoonacular.com/recipes/complexSearch'

const API_Key = process.env.REACT_APP_FOODSEARCH_API_Key_1;
// const API_Key = process.env.REACT_APP_FOODSEARCH_API_Key_2;

export default function Search({foodData, setFoodData}){
   const [query, setQuery] = useState('pizza')

   async function fetchFood(q){
    const res = await fetch(`${URL}?query=${q}&apiKey=${API_Key}`)
    const data = await res.json()
    // console.log(data.results)
    setFoodData(data.results)
}

   useEffect(() => {
    fetchFood(query)
   }, [])

   function handleSubmit(e){
    e.preventDefault();
    fetchFood(query);
   }
   

    return(
        <div>

        <form onSubmit={handleSubmit} 
        className="flex items-center space-x-2 mt-1 w-[500px] m-auto">
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search..."
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />
  <button
    type="submit"
    className="px-4 py-2 border border-yellow-400 rounded-lg text-yellow-600 hover:bg-yellow-400 hover:text-white transition"
  >
    Search
  </button>

</form>
</div>

    )
}