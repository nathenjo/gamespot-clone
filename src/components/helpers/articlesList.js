import React, { useState } from 'react';
import Article from './article';

export default function ArticlesList(props) {

    const [filter, setFilter] = useState('popular')

    return(
        <div className='articles-list'>
            <div className='articles-list__header'>
                <div className='articles-list__header__title'>Popular</div>
                <div className='articles-list__header__title'>Recent</div>
                <div className='articles-list__header__title'>Updated</div>
            </div>
            <Article title="Tom Holland Is Taking A Break From Acting, Says Maybe It's Time For A Spider-Woman" />
            <Article title="Xbox Shortages: Microsoft's Own Pro Halo Infinite Tournament Is Using Development Kits For Some Players" />
            <Article title="Next Mass Effect Runs On Unreal Engine 5, It Appears" />
            <Article title="$1000 Halo Infinite Football Helmet And Master Chief-Inspired Ice Hockey Goalie Pads Revealed" />
            <Article title="YouTube TV Drops ESPN And 17 Other Channels After Negotiations With Disney Fail" />
            <Article title="Where Is Xur Today? (Dec. 17-21) - Destiny 2 Xur Location And Exotics Guide" />
            <Article title="Halo Infinite Co-Op Campaign Is Now Playable With A Glitch, But Beware" />
            <Article title="The Witcher Season 2 Pokes Fun At Season 1's Biggest Misstep" />
            <Article title="PS5 Restock Tracker Update: In-Person PS5 Event Today" />
            <Article title="Destiny 2 Grasp Of Avarice Dungeon Is Hilariously Salty About A 7-Year-Old Exploit" />

        </div>
    );
}