import React from 'react';
import './Title.css';

// eslint-disable-next-line react/prop-types
function Title({ title }) {
	return <div className="title">Practice - {title}</div>;
}

export default Title;
