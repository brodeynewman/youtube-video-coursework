import fp from 'lodash/fp';

const getValidUsers = fp.compose(
  fp.map(fp.get('username')),
  fp.filter(fp.get('is_valid')),
  fp.get('data.users'),
);

const users = getValidUsers(users); // [{ ... }];
