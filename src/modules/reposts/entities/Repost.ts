import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../../posts/entities/Post";

@Entity("reposts")
class Repost {
  @PrimaryColumn({ type: "uuid" })
  id?: string;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => Post, post => post.reposts, { eager: true })
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  post: Post

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Repost }