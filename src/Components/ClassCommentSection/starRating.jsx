import React, {useState} from 'react';

const StarRating = () => {
    const[rating, setRating] = useState(0);
    return (  
        <>
            {
                [...Array(5)].map((star, index) =>
                {
                    //index+=1 so that index is not zero-index based
                    index+=1;
                    return(
                        <button
                            key={index}
                            onClick={() => setRating(index)}
                            onDoubleClick={() => setRating(0)}
                            className={index <=rating ? "on" : "off"}
                            >
                                <span className="star">
                                    &#9733;
                                </span>
                            </button>
                    )
                })
            }
        </>
    );
}
 
export default StarRating;