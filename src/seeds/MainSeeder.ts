import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { UserSeeder } from "./UserSeed";

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        await runSeeder(dataSource, UserSeeder)
    }
}