import pg from 'pg';
const Pool = pg.Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'simplepassword',
    port: 5432,
});

export default pool;