/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import Card from './components/Card/Card';

test('renders data on Card Component', () => {
	// eslint-disable-next-line react/react-in-jsx-scope
	const data = {
		bioId: 100001,
		firstName: 'Bruce',
		lastName: 'Wayne',
		title: 'Detective',
		email: 'bruce@wayne.com',
		social: { linkedIn: 'https://www.linkedin/brucewayne' },
		avatar: 'https://via.placeholder.com/140x140',
		platform: 'Engineering',
		practice: 'Cloud',
		skills: 'React',
		peopleLeader: '',
		region: 'Americas',
		projects: ['Workbench'],
	};
	render(<Card data={data} />);
	const firstName = screen.getByText(/Bruce/i);
	expect(firstName).toBeInTheDocument();
});
