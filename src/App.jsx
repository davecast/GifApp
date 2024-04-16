import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState(["dragon ball"]);

  const onAddCatergory = (category) => {
    if (categories.includes(category.toLowerCase())) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onAddNewCategory={onAddCatergory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
