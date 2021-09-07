
let url = 'http://www.erpclothe.com';

if (process.env.NODE_ENV === 'development') {
  url = 'http://www.erpclothe.com';
} else if (process.env.NODE_ENV === 'test') {
  url = 'http://www.erpclothe.com';
} else if (process.env.NODE_ENV === 'production') {
  url = 'http://www.erpclothe.com';
}
export const apis = {
  login: {
    login: url + '/login/login',
  }
};

