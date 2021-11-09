module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Novigo@123",
    DB: "sample",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };