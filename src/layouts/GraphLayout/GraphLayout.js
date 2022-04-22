import React, { useContext, useState } from 'react';
import { SelectedEmployeeContext } from '../../contexts/Contexts';
import Card from '../../components/Card/Card';
import PeepsRow from '../../components/PeepsRow/PeepsRow';
import PLeaderRow from '../../components/PLeaderRow/PLeaderRow';

const GraphLayout = () => {
	const [showPeeps, setShowPeeps] = useState(false);
	const [showPL, setShowPL] = useState(false);
	const selectedEmployee = useContext(SelectedEmployeeContext);

	const handleShowingPL = () => {
		setShowPL(!showPL);
	};

	const handleShowingPeeps = () => {
		setShowPeeps(!showPeeps);
	};

	return (
		<div className="d-flex flex-column align-items-center">
			{showPL ? <PLeaderRow /> : null}
			{selectedEmployee.length !== 0 ? (
				<Card
					data={selectedEmployee[0]}
					isSelected="true"
					onPeepsPress={handleShowingPeeps}
					onPLPress={handleShowingPL}
				/>
			) : null}
			{showPeeps ? <PeepsRow /> : null}
		</div>
	);
};

export default GraphLayout;
