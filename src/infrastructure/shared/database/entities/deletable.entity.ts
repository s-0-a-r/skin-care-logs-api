import { DeleteDateColumn } from 'typeorm';
import { EntityBase } from './base.entity';

export abstract class DeletableEntity extends EntityBase {
  @DeleteDateColumn()
  readonly deletedAt: Date;
}
