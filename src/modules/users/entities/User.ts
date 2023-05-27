import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Post } from "../../posts/entities/Post";
import { Repost } from "../../reposts/entities/Repost";
import { Comment } from "../../comment/entities/Comment";

@Entity("users")
class User {
  @PrimaryColumn({ type: "uuid" })
  id?: string;

  @Column({ type: "text" })
  name: string;

  @OneToMany(() => Post, post => post.user)
  posts: Post[]

  @OneToMany(() => Repost, repost => repost.user)
  reposts: Repost[]

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[]

  @Column({ type: "int", default: 0 })
  amountPosts: number

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }