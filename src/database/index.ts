import "reflect-metadata"
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "senai",
  database: "internal-notes",
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
  synchronize: false,
  logging: false,
  entities: [],
});

export function createConnection(host = "database_internal_notes"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

AppDataSource.initialize();

export default AppDataSource
