import React, { useEffect, useState } from 'react';

export default function DropDown(props) {

   const { className, links, setDropdownMenu, setDropDownIcon } = props;
    
       return(
         <div onMouseEnter={() => setDropDownIcon("fas fa-chevron-up")} onMouseLeave={() => setDropdownMenu(false) & setDropDownIcon("fas fa-chevron-down")} className={`dropdown ${className}`}>
            {links.map((link, index) => {
               return <div key={index} className="dropdown__link">{link}</div>
            })}
         </div> 
       );
}