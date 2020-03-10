export const config = {
  protocol: 'https',
  host: 'test.com',
};

const baseUrlPart = `${config.protocol}://${config.host}`;

export default {
  login() {
    return `${baseUrlPart}/auth`;
  },

  register() {
    return `${baseUrlPart}/users/create`;
  },
};
