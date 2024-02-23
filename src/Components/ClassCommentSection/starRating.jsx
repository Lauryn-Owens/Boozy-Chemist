import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    return (
        <>
            {[...Array(5)].map((_, index) => {
                const starIndex = index + 1; // Increment index by 1 to make it one-based
                return (
                    <button
                        key={starIndex}
                        onClick={() => setRating(starIndex)}
                        onDoubleClick={() => setRating(0)}
                        className={starIndex <= rating ? "on" : "off"}
                    >
                        <span className="star">
                            &#9733;
                        </span>
                    </button>
                );
            })}
        </>
    );
};

export default StarRating;
