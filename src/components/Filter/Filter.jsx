import React from 'react';
import { selectFilter } from 'Redux/selectors';
import { changeFilter } from 'Redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
