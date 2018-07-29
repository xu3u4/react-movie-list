const apiRoot = 'http://api.themoviedb.org/3';

const fetchApi = (endpoint, action, store) => {
  const paramsConnector = endpoint.indexOf('?') >= 0 ? '&' : '?';
  const fullPath = `${apiRoot + endpoint}${paramsConnector}api_key=f0218cb368232fc7b7ce7c10c724a25b`;
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

  const [successType, failureType] = types;

  return fetchApi(endpoint, callAPI, store)
    .then(
      payload => next(actionWith({
        type: successType,
        payload
      })),
      error => next(actionWith({
        type: failureType,
        error: error.msg || 'Something bad happened'
      }))
    );
};
