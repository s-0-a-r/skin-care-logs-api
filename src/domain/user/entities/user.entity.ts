import { EntityBase } from '@/domain/shared/entities/base.entity';

export class User extends EntityBase {
  private _id: string;

  constructor(id: string) {
    super();
    this._id = id;
  }

  get id(): string {
    return this._id;
  }
}
