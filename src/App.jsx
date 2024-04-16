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
      {/*TITULO*/}
      <h1>GifApp</h1>

      {/*INPUT*/}
      <AddCategory onAddNewCategory={onAddCatergory} />

      {/*LISTADO DE GIF*/}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/*GIF ITEM*/}
    </>
  );
};
