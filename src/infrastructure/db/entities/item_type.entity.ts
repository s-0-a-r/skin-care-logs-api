import { Column, Entity, OneToMany } from 'typeorm';
import { EntityBase } from '../shared/db/entities/base.entity';
import { Item } from './item.entity';

@Entity({ name: 'item_types' })
export class ItemType extends EntityBase {
  @Column()
  name: string;

  @OneToMany(() => Item, (item) => item.itemType)
  items: Item[];
}
