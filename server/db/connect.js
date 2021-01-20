const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const getClient = async () => {
    try {
        const client = await pool.connect();
        return client;
    } catch (error) {
        return null;
    }
};

module.exports = { pool, getClient };

