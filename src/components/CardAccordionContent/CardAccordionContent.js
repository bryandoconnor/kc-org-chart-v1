import './CardAccordionContent.css';
import React from 'react';
import SquareButton from '../SquareButton/SquareButton';

function CardAccordionContent({ skills, email, linkedin, firstName }) {
	return (
		<div className="accordion-content">
			<div className="content-item-container">
				<div className="skills-container">
					<span className="label">Skills:</span>
					{skills.map(
						(item, index) =>
							`${item}${index !== skills.length - 1 ? ', ' : ''}`,
					)}
				</div>
			</div>
			<div className="contact-row content-item-container">
				<span className="label">Contact:</span>
				<div className="google-linkedIn-row">
					<div className="google-button">
						<SquareButton
							link={email !== undefined ? `mailto:${email}` : ''}
							ariaLabel={`Send ${firstName} an email`}
						/>
					</div>
					<div className="linkedIn-button ">
						<SquareButton
							link={linkedin}
							ariaLabel={`Go to ${firstName}'s LinkedIn profile`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardAccordionContent;
