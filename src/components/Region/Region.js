import React from 'react';
import getRegionAbbreviation from '../../utilities/getRegionAbbreviation';
import './Region.css';

function Region({ region }) {
	return (
		<div className="region-container">
			<div className="region">{getRegionAbbreviation(region)}</div>
		</div>
	);
}

export default Region;
