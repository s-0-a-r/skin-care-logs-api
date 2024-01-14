import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/infrastructure/database/entities/user.entity';
import { UsersResolver } from '../graphql/user/resolvers/users.resolver';
import { UsersService } from '@/domain/user/services/users.service';
import { UserRepository } from '@/infrastructure/database/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService, UserRepository],
})
export class UsersModule {}
