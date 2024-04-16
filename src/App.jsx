import { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCatergory = () => {
    setCategories(["Nuevo agregado", ...categories]);
  };

  return (
    <>
      {/*TITULO*/}
      <h1>GifApp</h1>

      {/*INPUT*/}
      <AddCategory />
      {/*BUTTON*/}
      <button onClick={onAddCatergory}>Agregar</button>
      {/*LISTADO DE GIF*/}
      <ol>
        {categories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {/*GIF ITEM*/}
    </>
  );
};
