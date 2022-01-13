import React, { useState } from "react";
import Rate from "./Rate";

const Rating = () => {
    
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className="row">
        <div>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
        </div>
      </div>
    </>
  );
};

export default Rating;