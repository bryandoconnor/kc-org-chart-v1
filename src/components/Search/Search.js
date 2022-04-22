/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SearchResults from '../SearchResults/SearchResults';

function Search({ placeholder, data }) {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState('');

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			const { fullName } = value;
			return fullName.toLowerCase().includes(searchWord.toLowerCase());
		});
		if (searchWord === '') {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered('');
	};

	return (
		<div className="mb-5 mt-2 mx-auto search">
			<div className="border border-secondary d-flex">
				<input
					type="text"
					placeholder={placeholder}
					onChange={handleFilter}
					value={wordEntered}
				/>
				<div className="search-icon">
					{wordEntered.length === 0 ? (
						<SearchIcon />
					) : (
						<CloseIcon className="clear-btn" onClick={clearInput} />
					)}
				</div>
			</div>
			{wordEntered.length !== 0 && (
				<div className="data-result">
					<SearchResults filteredData={filteredData} />
				</div>
			)}
		</div>
	);
}

export default Search;
