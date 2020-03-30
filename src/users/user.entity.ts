import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@Column()
	surname: string

	@Column()
	email: string

	@Column()
	username: string

	@Column()
	password: string
}
