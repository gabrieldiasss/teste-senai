import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { User } from "../modules/users/entities/User";

class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    facotryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    const usersData = [
      {
        name: "GabrielDias",
      },
      {
        name: "Junior",
      },
      {
        name: "Alexandre",
      },
      {
        name: "José",
      },
      {
        name: "Amanda",
      },
    ];

    const newUser = userRepository.create(usersData);
    await userRepository.save(newUser);
  }
}

export { UserSeeder };
