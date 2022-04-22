import React from 'react';

function SearchResults({ filteredData }){
	if(filteredData.length === 0){
		return (
			<div className="data-item">
			 No matches found
			</div>
		);
	}
	if(filteredData.length !== 0){
		return filteredData.slice(0, 20).map((value) => (
			<a className="data-item" href={`/${value.kcid}`} key={value.kcid}>
				{`${value.fullName}`}
			</a>
		))
	}
};

export default SearchResults; 