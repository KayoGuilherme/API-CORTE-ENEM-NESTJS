import { CategoryEntity } from 'src/categorys/entities/category.entity';
import { UniversityEntity } from 'src/universities/entities/university.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({
  name: 'cursos',
})
export class CursoEntity {
  @PrimaryGeneratedColumn()
  id_curso: number;

  @Column()
  nome_curso: string;

  @Column()
  descricao_curso: string;

  @Column()
  nota_corte: number;

  @Column()
  ano_nota_corte: string;

  @Column()
  universidade_id: number;

  @ManyToOne(() => UniversityEntity)
  @JoinColumn({ name: 'universidade_id' })
  universidade: UniversityEntity;
  e;
  @Column()
  category_id: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'category_id' })
  categoria: CategoryEntity;
}
