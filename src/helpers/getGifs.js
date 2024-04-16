export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=19eN7rB1l3fMXLg5U4Lin7LhcnQS1fI3&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  return gifs;
};
