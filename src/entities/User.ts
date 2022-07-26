import { Employee } from './Employee';
import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {

  @PrimaryColumn()
  id: string;

  @Column()
  user: string;

  @Column()
  password: string;

  @Column()
  employee_id: string;

  @OneToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

}