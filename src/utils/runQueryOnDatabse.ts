import dbClient from "./dbClient";

// Returns any type Promise, so it is usable with all kinds of return data
export default async function runQueryOnDatabase(
  sql: string,
  variables?: Array<string | number>
): Promise<any> {
  const connection = await dbClient.connect();
  const result = await connection.query(sql, variables);
  connection.release();
  return result;
}
