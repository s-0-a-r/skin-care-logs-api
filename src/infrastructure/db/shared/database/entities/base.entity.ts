import { randomUUID } from 'crypto';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class EntityBase {
  constructor() {
    this.id = randomUUID();
  }

  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly updatedAt: Date;
}
