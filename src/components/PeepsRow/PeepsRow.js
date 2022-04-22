import React, { useContext } from 'react';
import { SelectedEmployeeContext } from '../../contexts/Contexts';
import Card from '../Card/Card';
import './PeepsRow.css';

function PeepsRow() {
	const selectedEmployee = useContext(SelectedEmployeeContext);

	return (
		<div className="card-row">
			{selectedEmployee.length > 1
				? selectedEmployee.slice(1).map((person) => <Card data={person} />)
				: null}
		</div>
	);
}

export default PeepsRow;
