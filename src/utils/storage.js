/* eslint-disable no-empty */
export function localStorageGetItem(key, parse = false) {
  try {
    const result = parse
      ? JSON.parse(localStorage.getItem(key))
      : localStorage.getItem(key);
    return result;
  } catch (error) {
    return null;
  }
}

export function localStorageRemoveItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}

export function localStorageSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {}
}
