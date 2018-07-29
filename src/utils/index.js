export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
};

export const imgSrc = (imgPath, width = 0) => {
  const w = width === 0 ? '' : `/w${width}`;
  return `https://image.tmdb.org/t/p${w}${imgPath}`;
};
