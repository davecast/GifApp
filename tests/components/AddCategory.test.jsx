import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory/AddCategory";

describe("Testing component <AddCategory />", () => {
  test("should change the value input text ", () => {
    render(<AddCategory onAddNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, {
      target: {
        value: "Saitama",
      },
    });

    expect(input.value).toBe("Saitama");
  });

  test("should call onNewCategory if the input has any value", () => {
    const inputValue = "Saitama";
    const onAddNewCategory = jest.fn();

    render(<AddCategory onAddNewCategory={onAddNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });

    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onAddNewCategory).toHaveBeenCalled();
    expect(onAddNewCategory).toHaveBeenCalledTimes(1);
    expect(onAddNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("not should call onNewCategory if the input value is less 2 or equal ", () => {
    const onAddNewCategory = jest.fn();

    render(<AddCategory onAddNewCategory={onAddNewCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onAddNewCategory).toHaveBeenCalledTimes(0);
    expect(onAddNewCategory).not.toHaveBeenCalled();
  });
});
