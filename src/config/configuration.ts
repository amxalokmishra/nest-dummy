export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT, 10) || 5432,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  jwtSecret: process.env.JWT_SECRET,
});
