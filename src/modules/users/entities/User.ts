import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('users')
class User {
    @PrimaryColumn()
    id?: string;
    
    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date
}

export { User }