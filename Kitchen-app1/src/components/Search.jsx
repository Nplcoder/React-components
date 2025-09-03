import { useEffect, useState } from "react"
const URL = 'https://api.spoonacular.com/recipes/complexSearch'
// const API_Key= 'af734fcf29fb4a66acfbcc12a2479cf1'
const API_Key= 'd1409811aa714eb4bad417094f9b9bd1'

export default function Search({foodData, setFoodData}){
   const [query, setQuery] = useState('pizza')
   useEffect(() => {
   async function fetchFood(){
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_Key}`)
        const data = await res.json()
        // console.log(data.results)
        setFoodData(data.results)
    }
    fetchFood()
   }, [])

    return(
        <div className="flex items-center space-x-2 mt-1 w-[500px] m-auto">
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search..."
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />
  <button
    type="button"
    className="px-4 py-2 border border-yellow-400 rounded-lg text-yellow-600 hover:bg-yellow-400 hover:text-white transition"
  >
    Search
  </button>
</div>

    )
}