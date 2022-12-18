import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBoard } from './entities/user-board.entity';
import { UserInvitation } from './entities/user-invitation.entity';
import { User } from './entities/user.entity';
import { UserTask } from './entities/users-task.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserBoard, UserTask, UserInvitation]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
