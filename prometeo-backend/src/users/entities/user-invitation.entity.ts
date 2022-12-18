import { Invitation } from 'src/invitations/entities/invitation.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'users_invitations' })
export class UserInvitation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'host_id' })
  host: User;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'guest_id' })
  guest: User;

  @OneToOne(() => Invitation)
  @JoinColumn({ name: 'invitation_id' })
  invitation: Invitation;
}
