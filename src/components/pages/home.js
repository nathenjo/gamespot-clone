import React, { useState } from 'react';
import ArticlesList from '../helpers/articlesList';
import LargeImageArticle from '../helpers/largeImageArticle';
import SmallImageArticle from '../helpers/smallImageArticle';
import Reviews from '../homeReviews';
import TopGames from '../topGames';

export default function Home(props) {
       return(
         <div className='home'>
           <div className='home__large-image-articles'>
            <LargeImageArticle
              className="home__large-image-articles__image-one"
              width="800"
              height="350"
              title="Game of The Year 2021 - Deathloop"
              caption="Arkane's latest game combines the best of open ended action, immersive sims, and rougelites to present something that is wholly its own."
            />
            <LargeImageArticle
              className="home__large-image-articles__image-two"
              width="400"
              height="350"
              title="25 Spider-Man: No Way Home Easter Eggs and References From Across The Multiverse"
              caption="This post contains spoilers from Spider-Man: No Way Home!"
            />
          </div>
          <div className='home__small-image-articles'>
            <SmallImageArticle
              className="home__small-image-articles__one"
              height="150"
              width="250"
              title="25 Spider-Man: No Way Home Easter Eggs and References From Across The Multiverse"
            />
            <SmallImageArticle
              className="home__small-image-articles__two"
              height="150"
              width="250"
              title="Every GameSpot Game of the Year"
            />
            <SmallImageArticle
              className="home__small-image-articles__three"
              height="150"
              width="250"
              title="What A Splinter Cell Devotee Wants From The Remake"
            />
            <SmallImageArticle
              className="home__small-image-articles__four"
              height="150"
              width="250"
              title="Editors Spotlight: Our Personal Favorite Games Of 2021"
            />
            <SmallImageArticle
              className="home__small-image-articles__five"
              height="150"
              width="250"
              title="The Witcher Star Henry Cavill Would Love To See A Red Dead Movie"
            />
            <SmallImageArticle
              className="home__small-image-articles__six"
              height="150"
              width="250"
              title="New Uncharted Movie Poster Revealed Featuring Tom Holland And Mark Wahlberg"
            />
            <SmallImageArticle
              className="home__small-image-articles__seven"
              height="150"
              width="250"
              title="GTA Online's New DLC Confirms Michael Is Still Alive After GTA 5 Story"
            />
            <SmallImageArticle
              className="home__small-image-articles__eight"
              height="150"
              width="250"
              title="Tom Holland Is Taking A Break From Acting, Says Maybe It's Time For A Spider-Woman"
            />
          </div>
          <div className='home__articles-list-wrapper'>
            <ArticlesList />
          </div>
          <TopGames className='home__top-games' />
          <Reviews className='home__reviews' />
         </div>
       );
}