import database from "~~/server/database";

const sql =
  "SELECT posts.title, posts.content, posts.date FROM posts JOIN topics ON posts.topic_id = topics.topic_id WHERE topics.name = $1 ORDER BY date DESC";

export default defineEventHandler(async (event) => {
  const params = [event.context.params.name];
  try {
    const { rows } = await database.query(sql, params);
    return rows;
  } catch {
    return [];
  }
});
