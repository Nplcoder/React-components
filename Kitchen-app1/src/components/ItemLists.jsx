import Item from "./Item";

export default function ItemLists ({food, isLoading}){
    return (
    <div>
        {isLoading ? (
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          ) :(
            food.extendedIngredients.map((item) => (
                <Item item={item}/>
               
             ))
            
          ) }
    </div>
)}