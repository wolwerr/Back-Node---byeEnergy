import { createConnection } from 'typeorm';
import { Usuarios } from '../entities/usuarios.entity';


export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '82032152',
    database: 'usersNode',
    entities: [
        Usuarios
    ],
    logging: true,
    synchronize: true
});