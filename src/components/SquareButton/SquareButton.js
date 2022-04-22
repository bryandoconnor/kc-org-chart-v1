/* eslint-disable react/react-in-jsx-scope */
import './SquareButton.css';

// eslint-disable-next-line react/prop-types
function SquareButton({ link = '', ariaLabel, children }) {
	// eslint-disable-next-line react/no-unstable-nested-components
	function RenderedButton() {
		if (link.length !== 0) {
			return (
				<a
					href={link}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={ariaLabel}
					className="round-button"
				>
					{children}
				</a>
			);
		}
	}
	return <RenderedButton />;
}

export default SquareButton;
