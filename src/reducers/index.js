import * as Actions from '../actions';

const initialState = {
	sunday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	monday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	tuesday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	wednesday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	thusday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	friday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	saturday: {
		breakfast: null,
		lunch: null,
		dinner: null
	}

};

const calendar = (state = initialState, action) => {
	const { day, recipe = null, meal } = action;

	switch (action.type) {

		case Actions.ADD_RECIPE :

			return {
				...state,
				[day]: {
					...state[day],
					[meal]: recipe
				}
			};
		
		case Actions.REMOVE_FROM_CALENDAR :

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