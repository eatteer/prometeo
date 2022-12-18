import { Board } from 'src/boards/entities/board.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'users_boards' })
export class UserBoard {
  @PrimaryGeneratedColumn()
  id: number;

  // User is many times in pivot table
  @ManyToOne(() => User, (user) => user.boardsBelongsTo)
  @JoinColumn({ name: 'user_id' })
  user: User;

  // Board is many times in pivot table
  @ManyToOne(() => Board, (board) => board.usersBelongsTo)
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @CreateDateColumn({ name: 'joined_at' })
  joinedAt: Date;

  @DeleteDateColumn({ name: 'left_at', nullable: true })
  leftAt: Date;
}
