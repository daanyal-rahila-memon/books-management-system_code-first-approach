import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'app_users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: number;
}
