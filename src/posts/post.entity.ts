import { User } from 'src/users/user.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm'

@Entity()
export class Post {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	title: string

	@Column()
	body: string

	@ManyToMany(() => User)
	@JoinTable()
	user: User[]
}
