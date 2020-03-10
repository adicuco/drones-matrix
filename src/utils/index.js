/* eslint-disable */
import {
  localStorageGetItem,
  localStorageSetItem,
} from 'utils/storage';

import { writeStorage } from '@rehooks/local-storage';

import constants from 'constants';
import { THEME_DARK, THEME_LIGHT } from 'constants/theme';

export default {
  splitNumber(number) {
    return number.toString().split('.');
  },

  toggleTheme() {
    const theme = localStorageGetItem(constants.THEME_KEY);
    if (theme === THEME_LIGHT || !theme) {
      writeStorage(constants.THEME_KEY, THEME_DARK);
    } else {
      writeStorage(constants.THEME_KEY, THEME_LIGHT);
    }
  },

  getAuthToken() {
    const token = localStorageGetItem(constants.JWT_TOKEN_KEY);
    return {
      headers: {
        'x-auth-token': token,
      },
    };
  },
};
