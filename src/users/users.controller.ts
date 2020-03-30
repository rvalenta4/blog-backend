import { Controller, Post, Body } from '@nestjs/common'
import { UserDto } from './user.dto'
import { UserLoginDto } from './user.login.dto'
import { User } from './user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('create')
	async createUser(@Body() user: UserDto): Promise<UserDto> {
		return await this.usersService.createUser(user)
	}

	@Post('login')
	async logUserIn(@Body() user: UserLoginDto): Promise<User> {
		return await this.usersService.logUserIn(user)
	}
}
