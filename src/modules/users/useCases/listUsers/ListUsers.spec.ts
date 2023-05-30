import request from "supertest";
import { app } from "../../../../app";
import { createConnection } from "../../../../database/data-source";
import { DataSource } from "typeorm";

let connection: DataSource;
describe("List all users", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it("should be able to list all users", async () => {
    await request(app).post("/users").send({
      name: "Gabriel",
    });

    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body.allUsers.length).toBe(1);
  });
});
