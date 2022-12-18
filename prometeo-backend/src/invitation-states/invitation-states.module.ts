import { Module } from '@nestjs/common';
import { InvitationStatesService } from './invitation-states.service';
import { InvitationStatesController } from './invitation-states.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitationState } from './entities/invitation-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvitationState])],
  controllers: [InvitationStatesController],
  providers: [InvitationStatesService],
})
export class InvitationStatesModule {}
