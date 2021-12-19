import React, { useEffect, useState } from 'react';

export default function LargeImageArticle(props) {

   const {className, width, height, title, caption} = props;

   const [hovered, setHovered] = useState(false)

   const transformImageStyle = () => {
      if (hovered == true) {
         return {filter: "brightness(50%)"}
      }
   }

   const transformTitleStyle = () => {
      if (hovered == true) {
         return {transform: "translateY(-40px)"}
      }
   }

   const transformCaptionStyle = () => {
      if (hovered == true) {
         return {opacity: "1", transform: "translateY(-5px)"}
      } else {
         return {opacity: "0", transform: "translateY(40px)"}
      }
   }

   const changeHoverState = () => {
      setHovered(!hovered)
   }

      return(
      <div onMouseEnter={changeHoverState} onMouseLeave={changeHoverState} style={{width: `${width}px`}} className={`large-image-article ${className}`}>
         <img style={transformImageStyle()} className="large-image-article__image" src={`https://via.placeholder.com/${width}x${height}`} />
         <div style={transformTitleStyle()} className='large-image-article__title'>{title}</div>
         <div style={transformCaptionStyle()} className='large-image-article__caption'>{caption}</div>
      </div>
      );
}