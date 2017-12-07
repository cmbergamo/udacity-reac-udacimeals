import * as Actions from '../actions';

const initialState = {

};

const calentar = (state = initialState, action) => {

	switch (action.type) {
		
		case Actions.ADD_RECIPE :
			const { day, recipe, meal } = action;

			return {
				...state,
				[day]: {
					...state[day],
					[meal]: recipe
				}
			};
		
		case Actions.REMOVE_FROM_CALENDAR :
			const { day, meal } = action;

			return {
				...state,
				[day]: {
					...state[day],
					[meal]: null
				}
			};

		default :
			return state;
	}
}

export default calendar;