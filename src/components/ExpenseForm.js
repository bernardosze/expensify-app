import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = props => {
	const [expense, setExpense] = useState({
		description: props.expense ? props.expense.description : '',
		amount: props.expense ? (props.expense.amount / 100).toString() : '',
		createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
		note: props.expense ? props.expense.note : '',
		calendarFocused: false,
		error: ''
	});

	const { description, amount, createdAt, note, calendarFocused, error } = expense;

	const onDescriptionChange = e => {
		//e.persist();
		setExpense({ ...expense, description: e.target.value });
	};

	const onAmountChange = e => {
		if (!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/)) {
			setExpense({ ...expense, amount: e.target.value });
		}
	};

	const onDateChange = createdAt => {
		if (createdAt) {
			setExpense({ ...expense, createdAt });
		}
	};

	const onFocusChange = ({ focused }) => {
		setExpense({ ...expense, calendarFocused: focused });
	};

	const onNoteChange = e => {
		setExpense({ ...expense, note: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		if (!description || !amount) {
			setExpense({ ...expense, error: 'Please provide description and amount' });
		} else {
			setExpense({ ...expense, error: '' });
			props.onSubmit({
				description,
				amount: parseFloat(amount, 10) * 100,
				createdAt: createdAt.valueOf(),
				note
			});
		}
	};

	// useEffect(() => {
	// 	console.log(expense);
	// });

	return (
		<div>
			{error && <p>{error}</p>}
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='description'
					autoFocus
					value={description}
					onChange={e => onDescriptionChange(e)}
				/>
				<input type='text' placeholder='Amount' value={amount} onChange={e => onAmountChange(e)} />
				<SingleDatePicker
					date={createdAt}
					onDateChange={onDateChange}
					focused={calendarFocused}
					onFocusChange={onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>

				<textarea
					placeholder='add a note for your expense (optional)'
					value={note}
					onChange={e => onNoteChange(e)}
				></textarea>
				<button>Add Expense</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
