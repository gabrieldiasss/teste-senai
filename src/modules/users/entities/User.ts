import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Post } from "../../posts/entities/Post";

@Entity("users")
class User {
  @PrimaryColumn({ type: "uuid" })
  id?: string;

  @Column({ type: "text" })
  name: string;

  @OneToMany(() => Post, post => post.user)
  posts: Post[]

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }