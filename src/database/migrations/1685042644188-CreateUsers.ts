import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1685042644188 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "amountPost",
            type: "int",
            default: 0,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
