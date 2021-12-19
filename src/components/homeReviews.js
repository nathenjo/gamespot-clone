import React, { useState } from 'react';

import RatingCircle from './helpers/ratingCircle'

export default function Reviews(props) {

    const {className} = props;

       return(
         <div className={`reviews ${className}`}>
            <div className='reviews__title'>Reviews</div>
                <ol className='reviews__list'>
                    <li style={{gridRow: 'row-start 1'}} className='reviews__list__list'>Ruined King: A League of Legends Story</li>
                    <div style={{gridRow: 'row-start 1'}} className='reviews__list__label'>Reviewd on PS4</div>
                    <RatingCircle position={1} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 2'}} className='reviews__list__list'>Shovel Knight Pocket Dungeon</li>
                    <div style={{gridRow: 'row-start 2'}} className='reviews__list__label'>Reviewed on NS</div>
                    <RatingCircle position={2} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 3'}} className='reviews__list__list'>Halo Infinite</li>
                    <div style={{gridRow: 'row-start 3'}} className='reviews__list__label'>Reviewed on XBSX</div>
                    <RatingCircle position={3} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 4'}} className='reviews__list__list'>Solar Ash</li>
                    <div style={{gridRow: 'row-start 4'}} className='reviews__list__label'>Reviewed on PC, PS5</div>
                    <RatingCircle position={4} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 5'}} className='reviews__list__list'>Big Brain Academy: Brain vs. Brain</li>
                    <div style={{gridRow: 'row-start 5'}} className='reviews__list__label'>Reviewed on NS</div>
                    <RatingCircle position={5} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 6'}} className='reviews__list__list'>Halo Infinite</li>
                    <div style={{gridRow: 'row-start 6'}} className='reviews__list__label'>Reviewed on XBSX</div>
                    <RatingCircle position={6} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 7'}} className='reviews__list__list'>Sherlock Holmes: Chapter One</li>
                    <div style={{gridRow: 'row-start 7'}} className='reviews__list__label'>Reviewed on PS5, XBSX</div>
                    <RatingCircle position={7} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 8'}} className='reviews__list__list'>Grand Theft Auto: The Trilogy - The Definitive Edition</li>
                    <div style={{gridRow: 'row-start 8'}} className='reviews__list__label'>Reviewed on PC</div>
                    <RatingCircle position={8} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 9'}} className='reviews__list__list'>Pokemon Brilliant Diamond</li>
                    <div style={{gridRow: 'row-start 9'}} className='reviews__list__label'>Reviewed on NS</div>
                    <RatingCircle position={9} className="reviews__list__rating" number={8} label="Great" />

                    <li style={{gridRow: 'row-start 10'}} className='reviews__list__list'>Inscryption</li>
                    <div style={{gridRow: 'row-start 10'}} className='reviews__list__label'>Reviewed on PC</div>
                    <RatingCircle position={10} className="reviews__list__rating" number={8} label="Great" />

                </ol>
         </div>
       );
}