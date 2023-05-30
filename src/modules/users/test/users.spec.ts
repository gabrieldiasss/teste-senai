import request from "supertest";
import { DataSource } from "typeorm";
import { createConnection } from "../../../database/data-source";
import { app } from "../../../app";

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

  it("should be able to list all users", async () => {
    await request(app).post("/users").send({
      name: "Gabriel",
    });

    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body.allUsers.length).toBe(1);
  });

  it("should be able to list specific user", async () => {
    await request(app).post("/users").send({
      name: "Gabriel",
    });

    const listUsersResponse = await request(app).get("/users");

    const userId = listUsersResponse.body.allUsers[0].id;

    const getUserResponse = await request(app).get(`/users/${userId}`);

    expect(getUserResponse.status).toBe(200);
    expect(getUserResponse.body).toEqual(
      expect.objectContaining({
        name: "Gabriel",
      })
    );
  });
});
