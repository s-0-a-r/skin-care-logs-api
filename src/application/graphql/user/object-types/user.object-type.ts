import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  constructor(id: string) {
    this._id = id;
  }

  private _id: string;

  @Field(() => ID)
  get id(): string {
    return this._id;
  }
}
