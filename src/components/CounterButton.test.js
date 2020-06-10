import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton statefull component', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);
		
	it('expect to render CounterButton component with red button', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.prop('color')).toEqual('red');
	});

	it('expect to have the initial state', () => {
		expect(wrapper.state('count')).toEqual(1);
	});

	it('correctly increments the state', () => {
		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state()).toEqual({count: 2});
		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state('count')).toBeGreaterThan(2);
	})
});


