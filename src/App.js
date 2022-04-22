import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { EmployeesContext } from './contexts/Contexts';
import employeeData from './apis/employeeData';
import Layout from './layouts/Layout';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const fetchEmployees = async () => {
			const response = await employeeData.get('/all');
			setEmployees(response.data);
		};
		fetchEmployees();
	}, []);

	return (
		<div className="app-container">
			<Nav />
			<main>
				<EmployeesContext.Provider value={employees}>
					<Routes>
						<Route path="/" exact element={<Layout />} />
						<Route path="/components" exact element={<Layout />} />
						<Route path="/:employeeId" exact element={<Layout />} />
					</Routes>
				</EmployeesContext.Provider>
			</main>
			<Footer />
		</div>
	);
}

export default App;
