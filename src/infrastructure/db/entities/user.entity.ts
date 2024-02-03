import { DeletableEntity } from '@/infrastructure/db/shared/db/entities/deletable.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends DeletableEntity {}
