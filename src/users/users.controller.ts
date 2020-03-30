import { Controller, Post, Body, Patch, Get, Param } from '@nestjs/common'
import { UserDto } from './entities/user.dto'
import { UserLoginApiEntity } from './entities/user.login.api.entity'
import { v1 as uuidv1 } from 'uuid'

@Controller('users')
export class UsersController {
	users = [
		{
			id: uuidv1(),
			name: 'User 1',
			surname: 'User 1',
			email: 'email@example.com',
			username: 'user1',
			password: 'password1234'
		}
	]

	@Get()
	getAllUsers() {
		return this.users
	}

	@Get(':id')
	getUser(@Param('id') id) {
		return this.users.find(user => user.id === id)
	}

	@Post('create')
	createUser(@Body() user: UserDto): UserDto {
		return user
	}

	@Post('login')
	loginUser(@Body() user: UserLoginApiEntity) {
		console.log(user)
	}
}
