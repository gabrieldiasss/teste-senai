import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "../../users/entities/User";

@Entity("posts")
class Post {
  @PrimaryColumn({ type: "uuid" })
  id?: string;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => User, users => users.posts, { eager: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User

  @CreateDateColumn({ type: "timestamp" })
  created_at: string | Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Post };
