import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvitationStatesService } from './invitation-states.service';
import { CreateInvitationStateDto } from './dto/create-invitation-state.dto';
import { UpdateInvitationStateDto } from './dto/update-invitation-state.dto';

@Controller('invitation-states')
export class InvitationStatesController {
  constructor(
    private readonly invitationStatesService: InvitationStatesService,
  ) {}

  @Post()
  create(@Body() createInvitationStateDto: CreateInvitationStateDto) {
    return this.invitationStatesService.create(createInvitationStateDto);
  }

  @Get()
  findAll() {
    return this.invitationStatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitationStatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvitationStateDto: UpdateInvitationStateDto,
  ) {
    return this.invitationStatesService.update(+id, updateInvitationStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitationStatesService.remove(+id);
  }
}
