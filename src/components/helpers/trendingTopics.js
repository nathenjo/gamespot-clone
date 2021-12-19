import React, { useState } from 'react';
import Divider from './divider';

export default function TrendingTopics(props) {
       return(
         <div className='trending-topics'>
            <div className='trending-topics__link'>Nintendo Indie World</div>
            <Divider />
            <div className='trending-topics__link'>Halo Slayer Update</div>
            <Divider />
            <div className='trending-topics__link'>Halo Infinite Skull Locations</div>
            <Divider />
            <div className='trending-topics__link'>Witcher Season 2</div>
            <Divider />
            <div className='trending-topics__link'>Best PC Games 2021</div>
            <Divider />
            <div className='trending-topics__link'>Best Switch Games of 2021</div>
         </div>
       );
}