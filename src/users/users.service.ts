import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { UserDto } from './user.dto'
import { UserLoginDto } from './user.login.dto'

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>
	) {}

	async createUser(userDto: UserDto) {
		const user = new User()
		const { name, surname, email, username, password } = userDto

		user.name = name
		user.surname = surname
		user.email = email
		user.username = username
		user.password = password

		// TODO - password hash, salts and peppers

		return await this.userRepository.save(user)
	}

	async logUserIn(userLoginDto: UserLoginDto): Promise<User> {
		try {
			const { username } = userLoginDto
			const user = await this.userRepository.findOneOrFail({ username })

			// TODO - finish login process
			return user
		} catch {
			throw new NotFoundException()
		}
	}
}
