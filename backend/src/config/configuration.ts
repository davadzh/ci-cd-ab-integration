export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION ?? '3600s',
  },
  database: {
    url: process.env.POSTGRES_DB_URL,
  },
});
