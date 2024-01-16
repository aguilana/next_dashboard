const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Uncomment the following line if you're using SSL in production
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

module.exports = {
  query: (text: string, params: any) => pool.query(text, params),
  getClient: async () => {
    const client = await pool.connect();
    return client;
  },
};
