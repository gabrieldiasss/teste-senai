import request from "supertest";
import { app } from "../../../../app";
import { createConnection } from "../../../../database/data-source";
import { DataSource } from "typeorm";

let connection: DataSource;
describe("List users", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it("should be able to list specific user", async () => {
    await request(app).post("/users").send({
      name: "Gabriel",
    });

    const listUsersResponse = await request(app).get("/users");

    const userId = listUsersResponse.body.allUsers[0].id;

    const getUserResponse = await request(app).get(`/users/${userId}`);

    console.log(getUserResponse.body)

    expect(getUserResponse.status).toBe(200);
    expect(getUserResponse.body).toEqual(
      expect.objectContaining({
        name: "Gabriel",
      })
    );
  });
});
