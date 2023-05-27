import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../../posts/entities/Post";
import { User } from "../../users/entities/User";

@Entity("reposts")
class Repost {
  @PrimaryColumn({ type: "uuid" })
  id?: string;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => Post, post => post.reposts)
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  post: Post

  @ManyToOne(() => User, user => user.reposts, { eager: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Repost }