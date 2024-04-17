import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 2) return;
    onAddNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
