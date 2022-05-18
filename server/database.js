import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "veddit",
  password: "postgres1",
  port: 5432,
});

export default pool;
