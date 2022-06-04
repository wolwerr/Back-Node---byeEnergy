import { createConnection } from 'typeorm';
import { Usuarios } from '../entities/usuarios.entity';
import { Feedbacks } from '../entities/feedbacks.entity';

export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'usersNode',
    entities: [
        Usuarios,
        Feedbacks
    ],
    logging: true,
    synchronize: true
});