import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../../posts/entities/Post";
import { User } from "../../users/entities/User";

@Entity("comments")
class Comment {
  @PrimaryColumn({ type: "uuid" })
  id?: string;

  @Column({ type: "text" })
  text: string;

  @ManyToOne(() => Post, post => post.comments)
  @JoinColumn({ name: "post_id", referencedColumnName: "id" })
  post: Post;
  
  @ManyToOne(() => User, user => user.comments)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Comment };
