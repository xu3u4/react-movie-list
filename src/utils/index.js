export const imgSrc = (imgPath, width = 0) => {
  const w = width === 0 ? '' : `/w${width}`;
  return `https://image.tmdb.org/t/p${w}${imgPath}`;
};
