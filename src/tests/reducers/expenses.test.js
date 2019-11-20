import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "13",
    description: "Car Lease",
    note: "",
    amount: 1000,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const id = expenses[1].id;
  const update = {
    note: "last month on this venue"
  };
  const action = {
    type: "EDIT_EXPENSE",
    id,
    update
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe(update.note);
});

test("should not edit an expense if id not found", () => {
  const id = "-1";
  const update = {
    note: "last month on this venue"
  };
  const action = {
    type: "EDIT_EXPENSE",
    id,
    update
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
