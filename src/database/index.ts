import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "docker",
    password: "senai",
    database: "internal-notes"
})