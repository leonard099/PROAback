import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./user.DTO";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  rol: UserRole;

  @Column({ length: 100, nullable: true })
  especialidad: string;

  @Column({ length: 50, nullable: true })
  matriculaProfesional: string;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}


