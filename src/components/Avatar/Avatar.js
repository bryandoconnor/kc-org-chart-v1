import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

function Avatar({ avatar }) {
	// eslint-disable-next-line react/no-unstable-nested-components
	function AvatarIcon() {
		let hasAvatar = false;
		const defaultAvatar = '/assets/images/avatar.svg';
		if (avatar.length !== 0) hasAvatar = true;

		return (
			<img
				alt="Avatar"
				className="avatar-icon"
				src={hasAvatar ? avatar : defaultAvatar}
			/>
		);
	}

	return <AvatarIcon />;
}

Avatar.propTypes = {
	avatar: PropTypes.string,
};

Avatar.defaultProps = {
	avatar: '',
};

export default Avatar;
