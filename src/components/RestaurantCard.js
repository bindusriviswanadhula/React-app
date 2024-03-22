import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla = {
            deliveryTime },
        } = resData?.info;
        
    return(
        <div 
         data-testid="resCard"
         className="res-card  m-4 p-4 w-[250px] rounded-lg shadow-lg hover:bg-gray-200" >
            <img 
            className="res-logo rounded-lg h-[250px]"
            alt="res- image"
            src={CDN_URL + cloudinaryImageId} 
            />
            <h3 className="font-bold py-4 h-[80px]">{name}</h3>
            <h4 className="h-[52px] mb-1 overflow-hidden">{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            

        </div>
    )
};

export default RestaurantCard;