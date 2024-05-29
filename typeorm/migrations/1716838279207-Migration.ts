import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migration1716838279207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"categorias",
            columns:[{
                name: 'id_categoria',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'nome_categoria',
                type: 'varchar'
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('categorias')
    }

}
