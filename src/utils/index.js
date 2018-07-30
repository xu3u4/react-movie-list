export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
};

export const imgSrc = (imgPath, width = 0) => {
  const w = width === 0 ? '' : `/w${width}`;
  return `https://image.tmdb.org/t/p${w}${imgPath}`;
};

export const paramsToQueryString = (params) => {
  const keys = Object.keys(params);

  return keys.reduce((urlQuery, key) => {
    const connector = urlQuery.length > 1 ? '&' : '';

    return `${urlQuery}${connector}${key}=${params[key]}`;
  }, '?');
};
