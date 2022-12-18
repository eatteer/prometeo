import { Invitation } from 'src/invitations/entities/invitation.entity';
import { List } from 'src/lists/entities/list.entity';
import { UserBoard } from 'src/users/entities/user-board.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'boards' })
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.createdBoards)
  @JoinColumn({ name: 'created_by_id' })
  createdBy: User;

  @OneToMany(() => UserBoard, (userBoard) => userBoard.board)
  usersBelongsTo: UserBoard[];

  @OneToMany(() => List, (list) => list.board)
  lists: List[];

  @OneToMany(() => Invitation, (invitation) => invitation.board)
  invitations: Invitation[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
