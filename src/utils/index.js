import noAvatar from 'assets/images/no_avatar.jpg';
import noImage from 'assets/images/no_image.png';

export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
};

const defaultImg = (type) => {
  switch (type) {
    case 'avatar':
      return noAvatar;
    case 'poster':
    default:
      return noImage;
  }
};

export const imgSrc = (imgPath = '', width = 0, type = 'poster') => {
  if (!imgPath) return defaultImg(type);

  const w = width === 0 ? '' : `/w${width}`;
  return `https://image.tmdb.org/t/p${w}${imgPath}`;
};

export const paramsToQueryString = (params) => {
  if (isEmptyObj(params)) return '';
  const keys = Object.keys(params);

  return keys.reduce((urlQuery, key) => {
    const connector = urlQuery.length > 1 ? '&' : '';

    return params[key].length ? `${urlQuery}${connector}${key}=${params[key]}` : urlQuery;
  }, '?');
};

export const queryStringToParams = (query) => {
  if (query.length === 0) return {};

  const params = {};
  const queries = query.substring(1).split('&');

  for (let i = 0; i < queries.length; i++) {
    const values = queries[i].split('=');
    params[values[0]] = values[1] || '';
  }
  return params;
};

export const updateUrlParams = (newParams, $window = window) => {
  const { pathname, search } = $window.location;

  if (isEmptyObj(newParams)) return pathname;

  const oldParams = queryStringToParams(search);
  const queryParams = paramsToQueryString({ ...oldParams, ...newParams });

  window.history.replaceState({}, '', `${pathname}${queryParams}`);
};
