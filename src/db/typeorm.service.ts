import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.config.get<DatabaseType>('DATABASE_TYPE'),
      host: this.config.get<string>('DATABASE_HOST_FOR_APP'),
      port: this.config.get<number>('DATABASE_PORT_FOR_APP'),
      database: this.config.get<string>('DATABASE_NAME'),
      username: this.config.get<string>('DATABASE_USER'),
      password: this.config.get<string>('DATABASE_PASSWORD'),
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: false,
      autoLoadEntities: true,
    } as TypeOrmModuleOptions;
  }
}
