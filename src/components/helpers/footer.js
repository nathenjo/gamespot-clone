import React, { useState } from 'react';

export default function Footer(props) {
  return(
    <div className='footer'>
      <div className='footer__header'>
        <div className='copyright'>
          <i className="far fa-copyright"></i>
          2021 GAMESPOT, A RED VENTURES COMPANY. ALL RIGHTS RESERVED.
        </div>
        <div className='links'>
          <div className='links__privacy-policy'>Privacy Policy</div>
          <div className='links__cookie-settings'>Cookie Settings</div>
          <div className='links__terms-of-use'>Terms of Use</div>
          <div className='links__help'>Help</div>
          <div className='links__partnerships'>Partnerships</div>
          <div className='links__careers'>Careers</div>
          <div className='links__do-not-sell'>Do Not Sell My Information</div>
        </div>
      </div>

      <div className='footer__body'>
        <div className='footer__body__more-sites'>
          <div className='footer__body__title'>MORE SITES</div>
          <div className='sites__link'><i className="fas fa-bomb"></i>giantbomb.com</div>
          <div className='sites__link'><i class="fab fa-gofore"></i>gamefaqs.com</div>
          <div className='sites__link'><i class="fab fa-monero"></i>metacritic.com</div> 
        </div>
        <div className='footer__body__reviews'>
          <div className='footer__body__title'>REVIEWS</div>
          <div>Latest Reviews</div>
          <div>PC</div>
          <div>PS4</div>
          <div>Xbox One</div>
          <div>Switch</div>
        </div>
        <div className='footer__body__news'>
          <div className='footer__body__title'>NEWS</div>
          <div>Latest News</div>
          <div>PC</div>
          <div>PS5</div>
          <div>Xbox Series X</div>
          <div>PS4</div>
          <div>Xbox One</div>
          <div>Switch</div>
          <img className='footer__img' src="https://www.gamespot.com/a/uploads/original/348/3488957/2417915-gamespot_logo.png" />
        </div>
        <div className='footer__body__shows'>
          <div className='footer__body__title'>SHOWS</div>
          <div>Lorescape</div>
          <div>Console Crew</div>
          <div>Remember When</div>
          <div>Loadout</div>
          <div>True Fiction</div>
        </div>
        <div className='footer__body__socials'>
          <div className='footer__body__title'>TALK TO US</div>
          <div className='footer__body__forums'>Forums</div>
          <div className='footer__body__subtitle'>GameSpot</div>
          <div className='footer__body__socials__icon-wrapper'>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-youtube-square"></i>
            <i class="fab fa-instagram"></i>
            <i className="fab fa-flipboard"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-envelope"></i>
          </div>
          <div className='footer__body__subtitle'>GameSpot Entertainment</div>
          <div className='footer__body__socials__icon-wrapper'>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-youtube-square"></i>
          </div>

        </div>
      </div>

    </div>
  );
}