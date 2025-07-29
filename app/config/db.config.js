module.exports = {
  HOST: "ep-dry-recipe-afysu4vp-pooler.c-2.us-west-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_i5xK0prEJOgN",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};