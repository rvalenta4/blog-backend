import { Injectable, NotFoundException, Inject } from '@nestjs/common'
import { Post } from './post.entity'
import { PostDto } from './post.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class PostsService {
	constructor(
		@InjectRepository(Post)
		private postRepository: Repository<Post>
	) {}

	async createPost(postDto: PostDto) {
		const post = new Post()
		post.title = postDto.title
		post.body = postDto.body

		return await this.postRepository.save(post)
	}

	async getAllPosts(query?: string): Promise<Post[]> {
		if (query) {
			return this.postRepository
				.createQueryBuilder('post')
				.where('title ILIKE :search')
				.orWhere('body ILIKE :search')
				.setParameters({ search: `%${query}%` })
				.getMany()
		} else {
			return await this.postRepository.find()
		}
	}

	async getPost(id: string): Promise<Post> {
		try {
			return await this.postRepository.findOneOrFail(id)
		} catch {
			throw new NotFoundException()
		}
	}
}
