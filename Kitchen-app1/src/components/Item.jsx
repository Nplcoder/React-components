export default function Item({item}){
    return(
    
         <div className="bg-white shadow-2xs w-[100px] border-2 border-amber-50 p-2 rounded-2xl">
            <div>
            <img 
                    src={
                        `https://img.spoonacular.com/ingredients_100x100/`+ item.image} 
                        alt="" />
            </div>

            <div>

            <div>
            <h3>{item.name}</h3>            
            </div>

            <div>
            <h3>
            {item.amount} {item.unit}
            </h3>
            </div>

            </div>
            
                    
                </div>
    
)}

{/* <div className="flex space-x-4 overflow-x-auto p-2">
  {items.map((item, i) => (
    <div
      key={i}
      className="bg-white shadow-md w-[100px] border-2 border-amber-50 p-2 rounded-2xl flex-shrink-0"
    >
      <div>
        <img
          src={`https://img.spoonacular.com/ingredients_100x100/${item.image}`}
          alt={item.name}
          className="w-full h-auto rounded"
        />
      </div>

      <div className="mt-2 text-center">
        <h3 className="font-medium text-gray-700">{item.name}</h3>
        <h3 className="text-sm text-gray-500">
          {item.amount} {item.unit}
        </h3>
      </div>
    </div>
  ))}
</div> */}
