import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem/GifItem";

describe("Pruebas sobre <GifItem />", () => {
  const title = "Saitama";
  const url =
    "https://media1.giphy.com/media/n5j50VGDzkUqA/giphy.gif?cid=7a2ab4ce72ghst1qa9jnnjtvwe9rkp9jaw38nvc4nv2kq7j0&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  test("should match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show the correctly image URL and ALT props", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { alt, src } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
