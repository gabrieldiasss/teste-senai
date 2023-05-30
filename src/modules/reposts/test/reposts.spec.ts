import { DataSource } from "typeorm";
import { createConnection } from "../../../database/data-source";
import request from "supertest";
import { app } from "../../../app";

let connection: DataSource;
describe("Reposts", () => {
  beforeAll( async () => {
    connection = await createConnection()
    await connection.runMigrations()
  });

  afterAll(async () => {
    await connection.dropDatabase()
    await connection.destroy()
  })

  it("should be able to create new repost", async () => {
    await request(app).post("/users").send({
        name: "Gabriel"
    })

    await request(app).post("/users").send({
        name: "Junior"
    })

    const listUsersResponse = await request(app).get("/users");

    const userIdFirst = listUsersResponse.body.allUsers[0].id;
    const userIdSecond = listUsersResponse.body.allUsers[1].id;

    await request(app)
    .post(`/posts/${userIdFirst}/create`)
    .send({
        title: "Post 1",
        description: "Post 1"
    })

    const postListResponse = await request(app).get("/posts");

    const postId = postListResponse.body.posts[0].id;

    const repostCreated = await request(app)
    .post(`/reposts/${postId}/create/${userIdSecond}`)
    .send({
        description: "Post very cool",
    })

    expect(repostCreated.status).toBe(201)
  })

});
