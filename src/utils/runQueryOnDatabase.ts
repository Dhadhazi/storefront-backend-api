import { QueryResult } from "pg";

import dbClient from "./dbClient";

export default async function runQueryOnDatabase(
  sql: string,
  variables?: Array<string | number>
): Promise<QueryResult> {
  const connection = await dbClient.connect();
  const result = await connection.query(sql, variables);
  connection.release();
  return result;
}
