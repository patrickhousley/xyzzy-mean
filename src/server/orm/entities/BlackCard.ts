import { CardSet } from 'src/server/orm/entities/CardSet';
import { BlackCardAttributes, CardSetAttributes } from 'src/shared/entities';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
  } from 'typeorm';

@Entity()
export class BlackCard implements BlackCardAttributes {
  @PrimaryGeneratedColumn() public id: number;

  @Column({
    type: 'varchar',
    length: '255'
  })
  public text: string;

  @Column({
    type: 'int',
    default: 0
  })
  public draw: number;

  @Column({
    type: 'int',
    default: 1
  })
  public pick: number;

  @Column({
    type: 'varchar',
    length: 5
  })
  public watermark: string;

  @ManyToOne(() => CardSet, cardSet => cardSet.blackCards, {
    cascadeAll: true
  })
  public cardSet: CardSetAttributes;
}
