import React, { useEffect, useState } from 'react';

import DropDown from './dropDownMenu';

export default function Link(props) {

    const {className, title, dropdown, links} = props;

    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [dropDownIcon, setDropDownIcon] = useState("fas fa-chevron-down");

       return(
         <div
            onMouseEnter={() => setDropDownIcon("fas fa-chevron-up") & setDropdownMenu(true)}
            onMouseLeave={() => setDropDownIcon("fas fa-chevron-down") & setDropdownMenu(false)}
            className={`link ${className}`}
        >
            <span className="link__title">{title}</span>
            {dropdown ? <i className={`link__icon ${dropDownIcon}`}></i> : null}
            {dropdownMenu && dropdown ? <DropDown className="link__dropdown" setDropDownIcon={setDropDownIcon} setDropdownMenu={setDropdownMenu} links={links} /> : null}
         </div>
       );
}