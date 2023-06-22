import React from 'react';
import { useDispatch } from "react-redux";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../../store/reducers/counterReducer";
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useTypedSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  }

  const onDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="increment-btn" onClick={onIncrement}>increment</button>
      <button data-testid="decrement-btn" onClick={onDecrement}>decrement</button>
    </div>
  );
};

export default Counter;