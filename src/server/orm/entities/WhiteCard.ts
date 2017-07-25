import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CardAttributes, CardSetAttributes } from 'src/shared/entities';
import { CardSet } from 'src/server/orm/entities/CardSet';

@Entity()
export class WhiteCard implements CardAttributes {
  @PrimaryGeneratedColumn() public id: number;

  @Column({
    type: 'varchar',
    length: '255'
  })
  public text: string;

  @Column({
    type: 'varchar',
    length: 5
  })
  public watermark: string;

  @ManyToOne(() => CardSet, cardSet => cardSet.whiteCards, {
    cascadeAll: true
  })
  public cardSet: CardSetAttributes;
}
