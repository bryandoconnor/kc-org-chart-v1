/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types

function Footer() {
	return (
		<div className="container-fluid footer px-0">
			<div className="wrapper">
				<div className="m-0 row">
					<div className="col footer__links">
						<h4>Column 1 Title</h4>
						<NavLink to="/">Link Name</NavLink>
						<NavLink to="/">Link Name</NavLink>
						<NavLink to="/">Link Name</NavLink>
					</div>
					<div className="col footer__links">
						<h4>Column 2 Title</h4>
						<NavLink to="/">Link Name</NavLink>
						<NavLink to="/">Link Name</NavLink>
						<NavLink to="/">Link Name</NavLink>
					</div>
					<div className="col footer__links">
						<h4>Column 3 Title</h4>
						<NavLink to="/">Link Name</NavLink>
						<NavLink to="/">Link Name</NavLink>
						<NavLink to="/">Link Name</NavLink>
					</div>
					<div className="col"></div>
					<div className="col d-flex justify-content-center d-flex align-items-start">
						<img
							alt="Kin + Carta"
							className="footer__logo"
							src="/assets/images/vertical-logo.png"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col footer__copyright">
						<span>
							© {new Date().getFullYear()} Kin and Carta Plc. All rights
							reserved.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
