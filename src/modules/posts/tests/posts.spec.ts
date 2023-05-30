import { DataSource } from "typeorm";
import { createConnection } from "../../../database/data-source";
import request from "supertest";
import { app } from "../../../app";

let connection: DataSource;
describe("Post", () => {
  beforeAll( async () => {
    connection = await createConnection()
    await connection.runMigrations()
  });

  afterAll(async () => {
    await connection.dropDatabase()
    await connection.destroy()
  })

  it("should be able to create new post", async () => {
    await request(app).post("/users").send({
        name: "Gabriel"
    })

    const listUsersResponse = await request(app).get("/users");

    const userId = listUsersResponse.body.allUsers[0].id;

    const postCreated = await request(app)
    .post(`/posts/${userId}/create`)
    .send({
        title: "Title test",
        description: "Description test"
    })

    expect(postCreated.status).toBe(201)
  })

  it("should be able to list all posts", async () => {
    await request(app).post("/users").send({
        name: "Gabriel"
    })

    const listUsersResponse = await request(app).get("/users");

    const userId = listUsersResponse.body.allUsers[0].id;

    await request(app)
    .post(`/posts/${userId}/create`)
    .send({
        title: "Title test",
        description: "Description test"
    })

    const allPosts = await request(app)
    .get("/posts")

    expect(allPosts.status).toBe(200)
    expect(allPosts.body.posts[0]).toHaveProperty("id")
  })
});
