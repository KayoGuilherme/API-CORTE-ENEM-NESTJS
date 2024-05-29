import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { UserEntity } from 'src/users/entities/user.entity';
import { UniversityEntity } from 'src/universities/entities/university.entity';
import { CursoEntity } from 'src/cursos/entities/curso.entity';
import { CategoryEntity } from 'src/categorys/entities/category.entity';
dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [UserEntity, UniversityEntity, CursoEntity, CategoryEntity],
  migrations: [`${__dirname}/migrations/**/*.ts`],
});

export default dataSource;
