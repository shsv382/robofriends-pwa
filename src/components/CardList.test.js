import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: "john",
			email: 'john@snow.com'
		}
	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})