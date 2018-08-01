import { paramsToQueryString } from 'utils';

const apiRoot = 'https://api.themoviedb.org/3';

const fetchApi = (endpoint, action, store) => {
  const allParams = { api_key: 'f0218cb368232fc7b7ce7c10c724a25b', ...action.params };
  const fullPath = `${apiRoot + endpoint}${paramsToQueryString(allParams)}`;

  return fetch(fullPath, {
    method: action.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: action.body && JSON.stringify(action.body)
  }).then((res) => {
    if (action.cb) action.cb(store.dispatch);
    return res.json();
  }).catch((err) => action.callbackErr(err));
};

export const CALL_API = 'Call API';

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') return next(action);

  const { endpoint, types } = callAPI;
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;

  next(actionWith({
    type: requestType
  }));

  return fetchApi(endpoint, callAPI, store)
    .then(
      payload => next(actionWith({
        type: successType.type,
        payload
      })),
      error => next(actionWith({
        type: failureType,
        error: error.msg || 'Something bad happened'
      }))
    );
};
