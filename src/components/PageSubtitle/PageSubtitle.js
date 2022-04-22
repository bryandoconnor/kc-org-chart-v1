import './PageSubtitle.css';
import React from 'react';

const PageSubtitle = ({ department }) => (
	<div className="d-flex flex-column align-items-center mb-3">
		<h5 className="subtitle-platform">{department}</h5>
	</div>
);

export default PageSubtitle;
