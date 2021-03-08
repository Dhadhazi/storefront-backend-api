import runQueryOnDatabase from "../utils/runQueryOnDatabase";

type User = {
  id: number;
  firstName: string;
  lastName: number;
  password: string;
};

export class UserStore {
  async createUser(
    firstName: string,
    lastName: string,
    password: string
  ): Promise<User> {
    try {
      const data = await runQueryOnDatabase(
        `INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *`,
        [firstName, lastName, password]
      );
      return data.rows[0];
    } catch (e) {
      console.log(e);
      throw new Error(`Could not add user ${e}`);
    }
  }
}
