import React, { useState } from 'react';

export default function SmallImageArticle(props) {

    const {width, height, title, className} = props;

    return(
        <div style={{width: `${width}px`}} className={`small-image-article ${className}`}>
            <img className='small-image-article__image' src={`https://via.placeholder.com/${width}x${height}`} />
            <div className='small-image-article__title'>{title}</div>
            <div className='small-image-article__interactions'>
                <i className="fas fa-comments"></i>
                {Math.floor(Math.random()*100)}
            </div>
        </div>
    );
}