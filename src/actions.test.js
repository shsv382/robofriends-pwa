import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';
 import * as actions from './actions';

 import configureMockStore from 'redux-mock-store';
 import thunkMiddleware from 'redux-thunk';

 const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField', () => {
	it('should return object', () => {
		expect(actions.setSearchField('123')).toEqual({
			type: CHANGE_SEARCHFIELD,
			payload: '123'
		})
	})
});

describe('requestRobots', () => {
	it('handles requesting robots API', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING
		}
		expect(action[0]).toEqual(expectedAction)
	})
});

// export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

// export const requestRobots = (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING })
//   apiCall('https://jsonplaceholder.typicode.com/users')
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// }