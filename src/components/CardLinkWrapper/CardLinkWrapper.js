import React from 'react';
import './CardLinkWrapper.css';

const CardLinkWrapper = ({ link, ariaLabel, children, isConsultant }) =>(
	<a href={link} aria-label={ariaLabel} className={`card-link ${isConsultant && "consultant"}`}>
		{children}
	</a>
);

export default CardLinkWrapper;
