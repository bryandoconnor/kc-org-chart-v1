import React from 'react';
import './Peeps.css';

function Peeps({ onPeepsPress, ariaLabel, isConsultant }) {
	return (
		<div
			className={`peeps ${isConsultant ? "consultant" : "not-consultant"}`}
			onClick={onPeepsPress}
			onKeyDown={onPeepsPress}
			role="button"
			tabIndex={0}
			aria-label={ariaLabel}
		>
			Peeps ▾
		</div>
	);
}

export default Peeps;
