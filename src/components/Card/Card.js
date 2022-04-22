import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import CardAccordionContent from '../CardAccordionContent/CardAccordionContent';
import CardLinkWrapper from '../CardLinkWrapper/CardLinkWrapper';
import Name from '../Name/Name';
import Title from '../Title/Title';
import Region from '../Region/Region';
import Project from '../Project/Project';
import PeopleLeader from '../PeopleLeader/PeopleLeader';
import Peeps from '../Peeps/Peeps';
import './Card.css';

function Card({ data, isSelected = false, onPeepsPress, onPLPress }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`card ${isSelected ? 'selected' : 'normal'} ${data.isConsultant ? "consultant" : "not-consultant"}`}>
			<div className="bio-container">
				<div className="avatar-container">
					<Avatar avatar={data.avatar} />
				</div>
				<div className="bio-info-container">
					<div className="name-region-row">
						<Name name={`${data.fullName}`} />
						<Region region={data.region} />
					</div>
					<Title title={data.practice} />
					<Project project={data.title} />
				</div>
			</div>
			{isOpen && (
				<CardAccordionContent
					skills={data.skills}
					email={data.email}
					linkedin={data.social.linkedin}
					firstName={data.firstName}
				/>
			)}
			<div className={`bottom-row ${!isSelected && "centered"}`}>
				{data.peopleLeader.length !== 0 && isSelected && data.peopleLeader !== data.kcid ? (
					<PeopleLeader
						onPLPress={onPLPress}
						ariaLabel={`Go to ${data.firstName}'s People Leader`}
						isConsultant={data.isConsultant}
					/>
				) : null}
				{data.team.length !== 0 && isSelected ? (
					<Peeps
						onPeepsPress={onPeepsPress}
						ariaLabel={`Go to ${data.firstName}'s Peeps`}
						isConsultant={data.isConsultant}
					/>
				) : null}
				{isSelected ? (<button
					className={`accordion-button ${isOpen ? 'open' : ''}`}
					type="button"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? 'See Less' : 'Learn More'}
				</button> ) : (<CardLinkWrapper
					link={`/${data.kcid}`}
					aria-label={`Select ${data.fullName}`}
					isConsultant={data.isConsultant}
				>
					Select
				</CardLinkWrapper>)}
			</div>
		</div>
	);
}

Card.propTypes = {
	data: PropTypes.shape({
		kcid: PropTypes.string,
		avatar: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		email: PropTypes.string,
		title: PropTypes.string,
		region: PropTypes.string,
		peopleLeader: PropTypes.string,
		platform: PropTypes.string,
		practice: PropTypes.string,
		skill: PropTypes.arrayOf(PropTypes.string),
		social: PropTypes.shape({
			linkedin: PropTypes.string,
		}),
		team: PropTypes.arrayOf(PropTypes.string),
		projects: PropTypes.arrayOf(PropTypes.string),
		bench: PropTypes.bool,
	}).isRequired,
};

export default Card;
