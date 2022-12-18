import { Board } from 'src/boards/entities/board.entity';
import { InvitationState } from 'src/invitation-states/entities/invitation-state.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'invitations' })
export class Invitation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Board, (board) => board)
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @OneToOne(() => InvitationState)
  @JoinColumn({ name: 'invitation_state_id' })
  invitationState: InvitationState;
}
