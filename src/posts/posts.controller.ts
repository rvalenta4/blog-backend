import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostDto } from './post.dto'

@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Post()
	async createPost(@Body() post: PostDto) {
		return await this.postsService.createPost(post)
	}

	@Get()
	async getAllPosts(@Query('search') query?: string) {
		return await this.postsService.getAllPosts(query)
	}

	@Get(':id')
	async getData(@Param('id') id: string) {
		return await this.postsService.getPost(id)
	}

	@Patch(':id')
	updatePost() {}

	@Delete(':id')
	deletePost() {}
}
