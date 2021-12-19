import React, { useState } from 'react';

export default function TopGames(props) {

    const {className} = props;

       return(
         <div className={`top-games ${className}`}>
            <div className='top-games__title'>Top Upcoming Games</div>
            <div className='top-games__list'>
                <ol>
                    <li>God of War: Ragnarok</li>
                    <div>2022</div>

                    <li>Legend of Zelda: Breath of the Wild 2</li>
                    <div>2022</div>

                    <li>The Elder Scrolls VI</li>
                    <div>Release Date: N/A</div>

                    <li>Star Wars: Knights of the Old Republic Remake</li>
                    <div>Release Date: N/A</div>

                    <li>Elden Ring</li>
                    <div>Feb 25, 2022</div>

                    <li>Final Fantasy XVI</li>
                    <div>Release Date: N/A</div>

                    <li>Overwatch 2</li>
                    <div>Release Date: N/A</div>

                    <li>Diablo IV</li>
                    <div>Release Date: N/A</div>

                    <li>Horizon Forbidden West</li>
                    <div>Feb 18, 2022</div>

                    <li>Dying Light 2 Stay Human</li>
                    <div>Feb 4, 2022</div>

                </ol>
            </div>
         </div>
       );
}