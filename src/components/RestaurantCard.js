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
         className="res-card  m-4 p-4 w-[200px] rounded-lg bg bg-gray-100 hover:bg-gray-200 h-[440px]" >
            <img 
            className="res-logo rounded-lg"
            alt="res- image"
            src={CDN_URL + cloudinaryImageId} 
            />
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>

        </div>
    )
};

export default RestaurantCard;