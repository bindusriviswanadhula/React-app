import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({items}) => {

    const dispatch = useDispatch();

   const handleAddItem  = (item) => {
      dispatch(addItem(item));
    }

    return(

        <div>
            {items.map((item) =>(
            <div 
              data-testid="foodItems"
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
              >
                <div className="w-9/12">
                <div className="py-2">
                    <span className="font-semibold">{item.card.info.name}</span>
                    <div className="py-2">
                        ₹ {item.card.info.price 
                        ? item.card.info.price/100 
                        : item.card.info.defaultPrice/100 }
                    </div>
                    
               </div>
               <p className="text-xs"> 
                 {item.card.info.description}
               </p>
               </div>
               <div className="w-3/12">

               <div className="absolute" >

                <button className="m-10 ml-2 mb-2 bg-white text-black shadow-lg"
                onClick={() => handleAddItem(item)}
                > 
                Add +</button>

            </div>

                <div>

                <img src={CDN_URL + item.card.info.imageId} className="w-full"/>

                </div>

        
                
               </div>
            </div>
            ))};
           </div>
    );
};

export default ItemList;