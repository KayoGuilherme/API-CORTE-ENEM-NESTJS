import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migration1716753966598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '125',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '125',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '65',
          },
          {
            name: 'role',
            type: 'int',
            default: '1'
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
