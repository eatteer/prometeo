import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvitationStateDto } from './dto/create-invitation-state.dto';
import { UpdateInvitationStateDto } from './dto/update-invitation-state.dto';
import { InvitationState } from './entities/invitation-state.entity';

@Injectable()
export class InvitationStatesService {
  constructor(
    @InjectRepository(InvitationState)
    private invitationStatesRepository: Repository<InvitationState>,
  ) {}

  create(createInvitationStateDto: CreateInvitationStateDto) {
    return 'This action adds a new invitationState';
  }

  findAll() {
    return this.invitationStatesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} invitationState`;
  }

  update(id: number, updateInvitationStateDto: UpdateInvitationStateDto) {
    return `This action updates a #${id} invitationState`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitationState`;
  }
}
