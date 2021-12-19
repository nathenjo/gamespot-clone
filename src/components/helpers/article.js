import React, { useState } from 'react';

export default function Article(props) {

    const {title} = props;

       return(
         <div className='article'>
            <div className='article__article'>Article</div>
            <div className='article__title'>{title}</div>
            <div className='article__interactions'>
                <div className='article__interactions__comments'>
                    <i class="fas fa-comment"></i>
                    {Math.floor(Math.random()*100)}
                </div>
                <div className='article__interactions__likes'>
                    <i class="fas fa-thumbs-up"></i>
                    {Math.floor(Math.random()*100)}
                </div>
            </div>
            <img src="https://via.placeholder.com/80" className='article__image' />
         </div>
       );
}