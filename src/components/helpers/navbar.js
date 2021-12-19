import React, { useEffect, useState } from 'react';

import Link from './link';
import Divider from './divider';

export default function NavBar(props) {

       return(
         <div className='navbar'>
            <img src={'https://via.placeholder.com/50'} className='navbar__logo' />
            <div className='navbar__links'>
                <Link
                  className='navbar__links__link'
                  title={"Best of 2021"}
                  dropdown={false}
                />
                <Link
                  className='navbar__links__link'
                  title={"News"}
                  dropdown={false}
                />
                <Link
                  className='navbar__links__link'
                  title={"Videos"}
                  dropdown={false}
                />
                <Link
                  className='navbar__links__link'
                  title={"Reviews"}
                  dropdown={true}
                  links={["Games", "Entertainment"]}
                />
                <Link
                  className='navbar__links__link'
                  title={"Staff Picks"}
                  dropdown={true}
                  links={["Best Gaming Chairs", "Best 4K TVs For Gaming", "Best PS5 Headset", "Best Monitor For PS5", "Xbox Series X"]}
                />
                <Link
                  className='navbar__links__link'
                  title={"Deals"}
                  dropdown={true}
                  links={["Gift Ideas", "GameSpot Store"]}
                />
                <Divider />
                <Link
                  className='navbar__links__link'
                  title={"Games"}
                  dropdown={true}
                  links={["Games", "Entertainment"]}
                />
                <Link
                  className='navbar__links__link'
                  title={"Entertainment"}
                  dropdown={true}
                  links={["Movies", "TV", "All Entertainment News"]}
                />
                <Divider />
                <Link
                  className='navbar__links__link'
                  title={"Forums"}
                  dropdown={false}
                  links={["Games, Entertainment"]}
                />
            </div>
            <div className='navbar__login'>
                <span>Login / Sign Up</span>
                <i className="fas fa-search"></i>
            </div>
         </div>
       );
}