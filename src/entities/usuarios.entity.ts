import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuarios {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', length: 15 })
    password?: string;

    @Column({ name: 'inclusion_date', type: 'date' })
    inclusionDate?: Date | string;

    @Column({ name: 'logged_in', type: 'boolean' })
    loggedIn?: boolean;
}