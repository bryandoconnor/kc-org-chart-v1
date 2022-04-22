import React, { useContext } from 'react';
import { EmployeesContext } from '../../contexts/Contexts';
import PageTitle from '../PageTitle/PageTitle';
import Search from '../Search/Search';

const PageTitleRow = () => {
	const employees = useContext(EmployeesContext);

	return (
		<div className="row mt-5 mx-0 mb-1">
			<div className="col-12 col-md-3 p-0">
				<PageTitle />
			</div>
			<div className="col-12 col-md-6 p-0">
				<Search placeholder="Enter a name..." data={employees} />
			</div>
		</div>
	);
};
export default PageTitleRow;
