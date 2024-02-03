import { Column, Entity, ManyToOne } from 'typeorm';
import { DeletableEntity } from '../shared/database/entities/deletable.entity';
import { ItemType } from './item_type.entity';

@Entity({ name: 'items' })
export class Item extends DeletableEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @ManyToOne(() => ItemType, (itemType) => itemType.items)
  itemType: ItemType;
}
