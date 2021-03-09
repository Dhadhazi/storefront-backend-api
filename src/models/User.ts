import runQueryOnDatabase from "../utils/runQueryOnDatabase";

export type User = {
  id: number;
  firstName: string;
  lastName: number;
  password: string;
};

const DATA_USER_GETS_BACK = "id, firstName, lastName";

export class UserStore {
  async getAll(): Promise<User[]> {
    try {
      const data = await runQueryOnDatabase(
        `SELECT ${DATA_USER_GETS_BACK} FROM users`
      );
      return data.rows;
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get users ${e}`);
    }
  }

  async getUser(id: number): Promise<User> {
    try {
      const data = await runQueryOnDatabase(
        `SELECT ${DATA_USER_GETS_BACK} FROM users WHERE id=($1)`,
        [id]
      );
      return data.rows[0];
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get user ${e}`);
    }
  }

  async createUser(
    firstName: string,
    lastName: string,
    password: string
  ): Promise<User> {
    try {
      const data = await runQueryOnDatabase(
        `INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING ${DATA_USER_GETS_BACK}`,
        [firstName, lastName, password]
      );
      return data.rows[0];
    } catch (e) {
      console.log(e);
      throw new Error(`Could not add user ${e}`);
    }
  }
}
