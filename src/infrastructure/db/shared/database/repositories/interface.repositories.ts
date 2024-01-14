import { EntityBase } from '@/domain/shared/entities/base.entity';

export abstract class IRepository<T> {
  abstract toDomain(entity: T): EntityBase;
  abstract toDatabase(): T;
  abstract toDatabase(entity: EntityBase): T;
}
