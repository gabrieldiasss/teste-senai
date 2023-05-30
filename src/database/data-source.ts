import "reflect-metadata";
import { DataSource, getConnectionOptions } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "senai",
  database: "internal-notes",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
});

export function createConnection(host = "database"): Promise<DataSource> {

  return AppDataSource.setOptions({
    host: process.env.NODE_ENV === "test" ? "localhost" : host,
    database:
      process.env.NODE_ENV === "test"
        ? "senai_test1"
        : "internal-notes",
  }).initialize();
}

export default AppDataSource;
