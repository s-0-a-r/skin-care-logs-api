import { Repository } from 'typeorm';
import { User as DomainUser } from '@/domain/user/entities/user.entity';
import { User as DatabaseUser } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IRepository } from '@/infrastructure/shared/database/repositories/interface.repository';

@Injectable()
export class UserRepository
  extends Repository<DatabaseUser>
  implements IRepository<DatabaseUser>
{
  constructor(
    @InjectRepository(DatabaseUser)
    private readonly repository: Repository<DatabaseUser>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  toDomain(entity: DatabaseUser): DomainUser {
    return new DomainUser(entity.id);
  }

  toDatabase(): DatabaseUser {
    const dbUser = new DatabaseUser();
    return dbUser;
  }
}
