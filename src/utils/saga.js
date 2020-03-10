const asyncTypes = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const createAsyncTypes = typeString =>
  Object.values(asyncTypes).reduce((acc, curr) => {
    acc[curr] = `${typeString}_${curr}`;
    return acc;
  }, {});

export const createAction = (type, payload = {}) => {
  return { type, payload };
};
