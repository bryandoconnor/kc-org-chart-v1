/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SelectedEmployeeContext } from '../contexts/Contexts';
import GraphLayout from './GraphLayout/GraphLayout';
import PageTitleRow from '../components/PageTitleRow/PageTitleRow';
import PageSubtitle from '../components/PageSubtitle/PageSubtitle';
import employeeData from '../apis/employeeData';
import './Layout.css';

const Layout = () => {
	const { employeeId } = useParams();
	const [selectedEmployee, setSelectedEmployee] = useState([]);

	const onSearchSubmit = async (kcid) => {
		await employeeData
			.get(`/${kcid}`)
			.then((response) => {
				if (Array.isArray(response.data)) setSelectedEmployee(response.data);
				else setSelectedEmployee([response.data]);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		if (employeeId === undefined) {
			onSearchSubmit(process.env.REACT_APP_STARTING_EMPLOYEE_ID);
			setSelectedEmployee([]);
		} else onSearchSubmit(employeeId);
	}, [employeeId]);

	return (
		<div className="container-fluid p-0">
			<div className="wrapper">
				<SelectedEmployeeContext.Provider value={selectedEmployee}>
					<PageTitleRow />
					<PageSubtitle
						department={
							selectedEmployee.length !== 0 ? selectedEmployee[0].platform : ''
						}
					/>
					<GraphLayout selectedEmployee={selectedEmployee} />
				</SelectedEmployeeContext.Provider>
			</div>
		</div>
	);
};
export default Layout;
