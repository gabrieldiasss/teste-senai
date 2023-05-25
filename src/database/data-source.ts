import "reflect-metadata"
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "senai",
  database: "internal-notes",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/users/entities/*.ts"],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource
