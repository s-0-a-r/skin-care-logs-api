import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();

export default new DataSource({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST_FOR_DEV,
  port: process.env.DATABASE_PORT_FOR_DEV,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  logging: false,
  entities: ['./src/infrastructure/db/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
} as DataSourceOptions);
