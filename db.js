const { DBPool } = require("idb-pconnector");

async function getTodos() {
  const pool = new DBPool();
  const sql = "SELECT * FROM DEVYUS1.TODOPF";

  try {
    const result = await pool.prepareExecute(sql);
    return result.resultSet;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function addTodo(desc) {
  const pool = new DBPool();
  const sql = "INSERT INTO DEVYUS1.TODOPF VALUES(?) WITH NC";

  const params = [desc];
  try {
    await pool.prepareExecute(sql, params);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getTodos,
  addTodo,
};
