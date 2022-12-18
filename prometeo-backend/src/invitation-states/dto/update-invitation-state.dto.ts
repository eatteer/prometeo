import { PartialType } from '@nestjs/mapped-types';
import { CreateInvitationStateDto } from './create-invitation-state.dto';

export class UpdateInvitationStateDto extends PartialType(CreateInvitationStateDto) {}
