const RestaurantCard = ({restaurant}) => {
    const {name, cusinie, avgRating, deliveryTime} = restaurant;
    return (
      <div className="restaurant-card">
        <img
          className="restaurant-logo"
          alt="restaurant-logo"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/z1bgpw0pmqlfvmbm1rw4"
        ></img>
        <h3>{name}</h3>
        <h4>{cusinie}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;