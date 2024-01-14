import { DeletableEntity } from '@/infrastructure/shared/database/entities/deletable.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends DeletableEntity {}
