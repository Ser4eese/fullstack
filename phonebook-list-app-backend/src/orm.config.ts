import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'pass',
  port: 5432,
  host: '127.0.0.1',
  database: 'Clients',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
