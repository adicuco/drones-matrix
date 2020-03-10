export const THEME_LIGHT = 'THEME_LIGHT';
export const THEME_DARK = 'THEME_DARK';

const defaults = {
  primary: '#F4976C',
  secondary: '#97AABD',
  error: 'red',
};

export default {
  [THEME_LIGHT]: {
    body: '#F7F9FB',
    text: '#363537',
    ...defaults,
  },
  [THEME_DARK]: {
    body: '#1A1A1D',
    text: '#FAFAFA',
    ...defaults,
    primary: '#116466',
    secondary: '#4E4E50',
  },
};
