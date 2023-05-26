import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("posts")
class Post {
  @PrimaryColumn()
  id?: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: string | Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Post };
