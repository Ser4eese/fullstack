/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('phonebook')
export class Clients {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  first_name: string;
  @Column()
  address: string;
  @Column()
  last_name: string;
  @Column()
  phone: number;
  @Column()
  email: string;
  @Column({ type: 'date' })
  datereg: string;
}
