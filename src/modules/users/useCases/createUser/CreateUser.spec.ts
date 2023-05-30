import request from "supertest";
import { app } from "../../../../app";
import { createConnection } from "../../../../database/data-source";
import { DataSource } from "typeorm";

let connection: DataSource;
describe("Create user", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it("should be able to create new user", async () => {
    const response = await request(app).post("/users").send({
      name: "Gabriel",
    });

    expect(response.status).toBe(201);
  });

  it("should not be able to create new user if name already exists", async () => {
    const response = await request(app).post("/users").send({
      name: "Gabriel",
    });

    expect(response.status).toBe(400);
  });
});
