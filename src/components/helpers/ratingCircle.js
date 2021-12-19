import React, { useState } from 'react';

export default function RatingCircle(props) {

    const {className, number, label, position} = props;

       return(
         <div style={{gridRow: `row-start ${position}`}} className={`rating-circle ${className}`}>
            <div className='rating-circle__number'>{number}</div>
            <div className='rating-circle__label'>{label}</div>
         </div>
       );
}