import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migration1716830148961 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'universities',
        columns: [
          {
            name: 'id_universidade',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome_universidade',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'category_id',
            type: 'int'
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('universities');
  }
}
