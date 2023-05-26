import { Collection, MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePosts1685067533075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    { name: "id", type: "uuid" },
                    { name: "title", type: "varchar" },
                    { name: "description", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts")
    }

}
