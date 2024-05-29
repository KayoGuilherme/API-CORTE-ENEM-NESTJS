import { CursoEntity } from 'src/cursos/entities/curso.entity';
import { UniversityEntity } from 'src/universities/entities/university.entity';
import { Column, Entity,  OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'categorias',
})
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nome_categoria: string;

  @OneToMany(() => CursoEntity, (curso) => curso.categoria)
  cursos: CursoEntity[];

  @OneToMany(() => UniversityEntity, (universitie) => universitie.categoria)
  universities: UniversityEntity[];
}
