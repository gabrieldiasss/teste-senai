import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "../seeds/MainSeeder";
import 'dotenv/config'

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DATABASE_URL,
  port: 5432,
  username: "docker",
  password: "senai",
  database: "internal-notes",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
  seeds: [MainSeeder]
}

const AppDataSource = new DataSource(options);

export function createConnection(): Promise<DataSource> {

  return AppDataSource.setOptions({
    host: process.env.DB_URI,
    database:
      process.env.NODE_ENV === "test"
        ? "senai_test1"
        : "internal-notes",
  }).initialize();
}

export default AppDataSource;
