import { Module } from '@nestjs/common'
import { PostsModule } from './posts/posts.module'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

@Module({
	imports: [TypeOrmModule.forRoot(), PostsModule, UsersModule]
})
export class AppModule {}
