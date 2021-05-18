"use strict";
exports.__esModule = true;
exports.config = void 0;
exports.config = {
    type: 'postgres',
    username: 'postgres',
    password: 'pass',
    port: 5432,
    host: '127.0.0.1',
    database: 'Clients',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}']
};
