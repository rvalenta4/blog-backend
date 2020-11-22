import { Post } from 'src/posts/post.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm'

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

	@ManyToMany(() => Post)
	@JoinTable()
	post: Post[]
}
