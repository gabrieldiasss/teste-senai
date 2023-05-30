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

 
});
