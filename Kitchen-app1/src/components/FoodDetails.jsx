import { useEffect, useState } from "react"
import ItemLists from "./ItemLists"

export default function FoodDetails ({FoodId}) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const URL = `https://api.spoonacular.com/recipes/${FoodId}/information`
    // const API_Key= 'af734fcf29fb4a66acfbcc12a2479cf1'
    const API_Key= 'd1409811aa714eb4bad417094f9b9bd1'

    useEffect(() => {
       async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_Key}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            setIsLoading(false)
        }
        fetchFood()
    }, [FoodId])

    return(
        <div className="max-w-[600px] mx-auto bg-white shadow-lg rounded-xl p-4 space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">{food.title}</h1>
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-auto rounded-lg mt-2"
        />
      </div>

      <div className="flex justify-between text-sm text-gray-700 bg-yellow-400 p-2 rounded-2xl shadow-2xs hover:bg-yellow-500 transition duration-500">
        <span>
          <strong>🕒 {food.readyInMinutes} mins</strong>
        </span>
        <span>
          <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
        </span>
        <span>
          <strong>{food.vegetarian ? "🥬 Veg " : "🍗 Non-Veg"}</strong>
        </span>
        <span>
          <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
        </span>
      </div>

      <div>
        <span className="block text-lg font-semibold text-gray-800">
          💲 {food.pricePerServing} Per serving
        </span>
      </div>

      <div>
        <h2>Food Ingredients</h2>
        <ItemLists food={food} isLoading={isLoading}/>
       
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">📃 Instruction</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {isLoading ? (
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          ) : (
            food.analyzedInstructions?.[0]?.steps.map((step) => (
              <li key={step.number} className="text-gray-500">
                {step.step}
              </li>
            ))
          )}
        </ol>
      </div>
    </div>
    )
}