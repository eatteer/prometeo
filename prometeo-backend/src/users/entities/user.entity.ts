import { Board } from 'src/boards/entities/board.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { UserBoard } from './user-board.entity';
import { UserInvitation } from './user-invitation.entity';
import { UserTask } from './users-task.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @OneToMany(() => Board, (board) => board.createdBy)
  createdBoards: Board[];

  @OneToMany(() => UserBoard, (userBoard) => userBoard.user)
  boardsBelongsTo: UserBoard[];

  @OneToMany(() => UserTask, (userTask) => userTask.user)
  tasksAssigned: UserTask[];

  @OneToMany(() => UserInvitation, (userInvitation) => userInvitation.host)
  invitationsSent: UserInvitation[];

  @OneToMany(() => UserInvitation, (userInvitation) => userInvitation.guest)
  invitationsReceived: UserInvitation[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
