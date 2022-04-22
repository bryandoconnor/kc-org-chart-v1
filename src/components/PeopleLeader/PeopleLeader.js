import React, { useContext } from 'react';
import Avatar from '../Avatar/Avatar';
import { EmployeesContext, SelectedEmployeeContext } from '../../contexts/Contexts';
import './PeopleLeader.css';

function PeopleLeader({ onPLPress, ariaLabel, isConsultant }) {
	const employees = useContext(EmployeesContext);
	const selectedEmployee = useContext(SelectedEmployeeContext);
	const pL = employees.filter((person) => person.kcid === selectedEmployee[0].peopleLeader);

	return (
		<div
			className={`people-leader ${isConsultant ? "consultant" : "not-consultant"}`}
			onClick={onPLPress}
			onKeyDown={onPLPress}
			role="button"
			tabIndex={0}
			aria-label={ariaLabel}>
			<div className="sm-avatar-container">
				<Avatar avatar={pL.length !== 0 ? pL[0].avatar : ""} />
			</div>
			People Leader
		</div>
	);
}

export default PeopleLeader;
