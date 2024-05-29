import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entities/user.entity';

import { AuthModule } from './auth/auth.module';
import { UniversitiesModule } from './universities/universities.module';
import { CursosModule } from './cursos/cursos.module';
import { UniversityEntity } from './universities/entities/university.entity';
import { CursoEntity } from './cursos/entities/curso.entity';
import { CategorysModule } from './categorys/categorys.module';
import { CategoryEntity } from './categorys/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [UserEntity, UniversityEntity, CursoEntity, CategoryEntity],
    }),
    UsersModule,
    AuthModule,
    UniversitiesModule,
    CursosModule,
    CategorysModule,
  ],
})
export class AppModule {}
