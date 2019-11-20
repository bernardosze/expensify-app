import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import reduxStore from './store/store';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = reduxStore();

store.dispatch(addExpense({ description: 'water bill', amount: 6000 }));
store.dispatch(addExpense({ description: 'eletric bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 125000 }));

const { expenses, filters } = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));
