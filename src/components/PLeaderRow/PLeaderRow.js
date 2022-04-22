import React, { useContext } from 'react';
import {
	EmployeesContext,
	SelectedEmployeeContext,
} from '../../contexts/Contexts';
import Card from '../Card/Card';
import './PLeaderRow.css';

function PLeaderRow() {
	const employees = useContext(EmployeesContext);
	const selectedEmployee = useContext(SelectedEmployeeContext);
	const pL = employees.filter(
		(person) => person.kcid === selectedEmployee[0].peopleLeader,
	);

	return (
		<div className="card-row">
			<Card data={pL[0]} />
		</div>
	);
}

export default PLeaderRow;
