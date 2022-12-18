import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'invitation_states' })
export class InvitationState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
