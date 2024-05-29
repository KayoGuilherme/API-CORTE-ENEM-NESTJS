import { CategoryEntity } from 'src/categorys/entities/category.entity';
import { CursoEntity } from 'src/cursos/entities/curso.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'universities',
})
export class UniversityEntity {
  @PrimaryGeneratedColumn()
  id_universidade: number;

  @Column()
  nome_universidade: string;

  @Column()
  category_id: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'category_id' })
  categoria: CategoryEntity;

  @OneToMany(() => CursoEntity, (curso) => curso.universidade)
  cursos: CursoEntity[];
}
