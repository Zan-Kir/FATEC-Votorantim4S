module.exports = {
  development: {
    storage: './database.sqlite',
    dialect: 'sqlite'
  },
  test: {
    storage: ':memory:',
    dialect: 'sqlite'
  },
  production: {
    storage: './database.sqlite',
    dialect: 'sqlite'
  }
};
