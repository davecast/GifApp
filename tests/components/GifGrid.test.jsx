import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Testing component <GifGrid />", () => {
  const category = "One Punch";

  test("should show loading first", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should show items when load the images with useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "Saitama",
        url: "https://media1.giphy.com/media/n5j50VGDzkUqA/giphy.gif?cid=7a2ab4ce72ghst1qa9jnnjtvwe9rkp9jaw38nvc4nv2kq7j0&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      },
      {
        id: "abc2",
        title: "Saitama 2",
        url: "https://media1.giphy.com/media/n5j50VGDzkUqA/giphy.gif?cid=7a2ab4ce72ghst1qa9jnnjtvwe9rkp9jaw38nvc4nv2kq7j0&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
