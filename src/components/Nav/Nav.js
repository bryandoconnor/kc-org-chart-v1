/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Nav() {
	return (
		<div className="container-fluid nav-container p-0">
			<div className="wrapper">
				<div className="m-0 pt-3 row">
					<div className="col">
						<NavLink className="nav-logo" to="/">
							<img
								alt="Kin + Carta"
								className='nav-favicon'
								src="/assets/images/favicon.png"
							/>
							<img
								alt="Kin + Carta"
								className="nav-logo"
								src="/assets/images/logo.svg"
							/>
						</NavLink>
					</div>
					<div className="col">
						<div className="dropdown mr-5  show text-right">
							<a
								className="btn btn-dark dropdown-toggle"
								href="#"
								role="button"
								id="dropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Americas
							</a>

							<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<NavLink className="dropdown-item" to="/usa">
									United States
								</NavLink>
								<NavLink className="dropdown-item" to="/latam">
									Latin America
								</NavLink>
								<NavLink className="dropdown-item" to="/eu">
									Europe
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;
