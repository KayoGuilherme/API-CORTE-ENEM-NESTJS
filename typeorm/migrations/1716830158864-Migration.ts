import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migration1716830158864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
          new Table({
            name: 'cursos',
            columns: [
              {
                name: 'id_curso',
                type: 'int',
                isGenerated: true,
                isPrimary: true,
                generationStrategy: 'increment',
              },
              {
                name: 'nome_curso',
                type: 'varchar',
                length: '100',
              },
              {
                name: 'descricao_curso',
                type: 'varchar',
                length: '100',
              },
              {
                name: 'nota_corte',
                type: 'float',
              },
              {
                name: 'ano_nota_corte',
                type: 'varchar',
              },
              {
                name: 'universidade_id',
                type: 'int',
              },
              {
                name: 'category_id',
                type: 'int',
              },
            ],
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('cursos');
    }

}
