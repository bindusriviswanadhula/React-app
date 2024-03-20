
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    

    const handleClick = () => {
        setShowIndex();
    }
    
    return (
    <div className="m-10">
       
        <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer"
                 onClick={handleClick} 
            
            >
                <span className="font-bold rounded-lg">
                {data.title} ({data.itemCards.length})
                </span>
                <span>▼</span>
            </div>
            
            {showItems && <ItemList items ={data.itemCards} />}
            
        </div>
    </div>
    )
}

export default RestaurantCategory;