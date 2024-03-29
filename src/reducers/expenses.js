const expenseReducerInitialState = [];

export default (state = expenseReducerInitialState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => action.id !== id);
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.update
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};
