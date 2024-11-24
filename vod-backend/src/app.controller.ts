import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './auth/roles.decorator';
import { RolesGuard } from './auth/roles.guard';
import { Role } from './auth/role.enum';

@Controller('app')
@UseGuards(RolesGuard)
export class AppController {
  @Get('admin')
  @Roles(Role.Admin)
  getAdminContent() {
    return 'This is admin content';
  }

  @Get('user')
  @Roles(Role.User)
  getUserContent() {
    return 'This is user content';
  }
}
